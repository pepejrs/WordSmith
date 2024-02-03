import React,{ useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function Sockets({ children }) {
  const [socket, setSocket] = useState();

  const server_url =
    process.env.NODE_ENV === "production"
      ? "https://wordsimithserver.onrender.com"
      : "http://localhost:7000";

  useEffect(() => {
    setSocket((prev) => io(server_url));
  }, [server_url]);

  return <>{React.cloneElement(children, { socket })}</>;
}
