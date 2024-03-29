import { useCallback, useContext, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useOutletContext, useParams } from "react-router-dom";
import { URLContext } from "../contexts/URLContext";
import { io } from "socket.io-client";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
  TEInput,
} from "tw-elements-react";

import { AuthContext } from "../contexts/authContext";

import axios from "axios";
import TextToSpeech from "./TextToSpeech";
import ChatPanel from "./ChatPanel";
import { toast } from "react-toastify";

const SAVE_INTERVAL_MS = 6000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function TextEditor() {
  const { id: documentId } = useParams();
  const [quill, setQuill] = useState();
  const Auth = useContext(AuthContext);
  const [docTitle, setDocTitle] = useState(`${Auth.currentUser}'s Doc`);
  const SERVER_URL = useContext(URLContext);

  const [showModal, setShowModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [contributorName, setContributorName] = useState("");
  const [socket, setSocket] = useState();
  const [currentText, setCurrentText] = useState("/n");

  useEffect(() => {
    const s = io(SERVER_URL);
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);
  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document) => {
      setDocTitle((prev) => document.title);
      quill.setContents(document.data);
      console.log(document.data);
      quill.enable();
    });

    socket.emit("get-document", { id: documentId, user: Auth.currentUser });
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);
    socket.on("title-change", (data) => {
      setDocTitle((prev) => data.title);
    });

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
      const cText = quill.getText();
      setCurrentText((prev) => cText);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);
  function emitTitle() {
    socket.emit("title-change", { title: docTitle, id: documentId });
  }
  async function handleAddcontributor() {
    const contributorRequest = {
      from: Auth.currentUser,
      to: contributorName,
      documentId: documentId,
    };
    try{
    const response = await axios.post(
      `${SERVER_URL}/requests/addContributor`,
      contributorRequest
    );
    toast.success("Request to add sent!")
    console.log(response);
    }
    catch{
      toast.error("Error while sending request :(")
    }
  }

  return (
    <>
    <div className="bg-amber-50 w-full h-screen">
        <div className="flex items-center py-4">
          <div className="w-96 pl-10 flex-grow">
            <TEInput
              type="title"
              label="Document Title"
              size="lg"
              className="mb-6"
              value={docTitle}
              onChange={(e) => {
                setDocTitle((prev) => e.target.value);
                emitTitle();
              }}
            />
          </div>
          <TERipple rippleColor="amber-100">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              style={{color:"black"}}
              className="inline-block rounded-full bg-amber-700 mx-6 px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-amber-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-amber-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          
          >
            Add Contributors
          </button>
        </TERipple>

        {/* <!-- Modal --> */}
        <TEModal show={showModal} setShow={setShowModal}>
          <TEModalDialog>
            <TEModalContent>
              <TEModalHeader>
                {/* <!--Modal title--> */}
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  contributors
                </h5>
                {/* <!--Close button--> */}
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              {/* <!--Modal body--> */}
              <TEModalBody>
                <TEInput
                  type="user"
                  label="contributor username"
                  size="lg"
                  className="mb-6"
                  onChange={(e) => {
                    setContributorName((prev) => e.target.value);
                  }}
                ></TEInput>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="amber-100">
                  <button
                    type="button"
                    style={{color:"black"}}
                    className="inline-block rounded bg-amber-700 mx-6 px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-amber-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-amber-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={() => setShowModal(false)}
                    >
                    Cancel
                  </button>
                </TERipple>
                <TERipple rippleColor="amber-100">
                  <button
                    style={{color:"black"}}
                    type="button"
                    onClick={handleAddcontributor}
                    className="ml-1 inline-block rounded bg-amber-700 mx-6 px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-amber-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-amber-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    ADD
                  </button>
                </TERipple>
              </TEModalFooter>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      </div>



 
    
     
        <ChatPanel className="z-30" quill={quill} />;
        <div
          className=" h-96 px-48 my-20 text-gray-700 font-semibold"
          ref={wrapperRef}
        ></div>
        <TextToSpeech text={currentText} />
      </div>
    </>
  );
 
}
