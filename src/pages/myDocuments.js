import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { URLContext } from "../contexts/URLContext";
import { AuthContext } from "../contexts/authContext";
import AddDocuments from "../utils/addDocuments";
import { Link } from "react-router-dom";

function MyDocuments() {
  const [doclist, setDoclist] = useState(["fruits", "college", "internship"]);
  const SERVER_URL = useContext(URLContext);
  const Auth = useContext(AuthContext);
  useEffect(() => {
    getDocs();
  }, []);
  async function getDocs() {
    try {
      const res = await axios.post(`${SERVER_URL}/fetchdocs`, {
        username: Auth.currentUser,
      });
      setDoclist((prev) => res.data.doclist);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <div className="bg-[#f7d0b6] h-screen w-full">
        <div className="pt-20 pb-0">
          <div className=" mx-auto flex justify-center items-center">
            <div className="max-w-xl">
              <h2 className="font-black text-sky-950 text-5xl ">
                My Documents
              </h2>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div class=" overflow-hidden rounded border-b border-gray-200">
            <table class="min-w-2.5 m-auto bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    S.N.
                  </th>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Title
                  </th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Id
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                {doclist.map((doci, index) => {
                  console.log(doci);
                  return (
                    <tr key={doci._id}>
                      <td class="w-1/3 text-left py-3 px-4">{index}</td>
                      <td class="w-1/3 text-left py-3 px-4">{doci.title}</td>
                      <td class="text-left py-3 px-4">
                        <Link
                          className="hover:text-blue-500"
                          to={`/Documents/${doci._id}`}
                        >
                          {doci._id}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div class=" max-w-lg p-10 container flex justify-center mx-auto pb-48">
          <div class="flex flex-row mx-auto gap-48">
            <AddDocuments />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyDocuments;
