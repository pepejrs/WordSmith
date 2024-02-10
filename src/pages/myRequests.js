import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/authContext.js";
import { URLContext } from "../contexts/URLContext.js";
export default function MyRequests() {
  const Auth = useContext(AuthContext);
  const SERVER_URL = useContext(URLContext);
  const [requestList, setRequestList] = useState(["a", "b", "c"]);

  useEffect(() => {
    setInterval(()=>{
      getRequests();
    },2000)
  }, []);
  async function getRequests() {
    const res = await axios.post(`${SERVER_URL}/requests/fetchReq`, {
      username: Auth.currentUser,
    });
    console.log(res);
    setRequestList((prev) => res.data.reqList);
  }
  async function deleteRequest(id) {
    const resofDeletion = await axios.post(
      `${SERVER_URL}/requests/deleteRequest`,
      { reqId: id }
    );
    getRequests();
  }
  async function acceptRequest(id) {
    const resofAcceptance = await axios.post(
      `${SERVER_URL}/requests/acceptRequest`,
      { reqId: id }
    );

    getRequests();
  }

  return (
    <>
      <div className="bg-[#f7d0b6] h-screen w-full">
        <div className="pt-20 pb-0">
          <div className=" mx-auto flex justify-center items-center">
            <div className="max-w-xl">
              <h2 className="font-black text-sky-950 text-5xl ">My Requests</h2>
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
                    Request From
                  </th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Accept
                  </th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Decline
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                {requestList.map((request, index) => {
                  console.log(request);
                  return (
                    <tr key={request._id}>
                      <td class="w-1/3 text-left py-3 px-4">{index}</td>
                      <td class="w-1/3 text-left py-3 px-4">{request.from}</td>
                      <td className="px-6 hover:text-green-400">
                        <i
                          class="fa-regular fa-2x fa-circle-check"
                          onClick={() => acceptRequest(request._id)}
                        ></i>
                      </td>
                      <td className="px-6 hover:text-red-600">
                        <i
                          class="fa-regular fa-2x fa-circle-xmark"
                          onClick={() => deleteRequest(request._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div class=" max-w-lg p-10 container flex justify-center mx-auto pb-48">
          <div class="flex flex-row mx-auto gap-48"></div>
        </div>
      </div>
    </>
  );
}
