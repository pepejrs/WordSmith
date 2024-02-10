import React from "react";

const Video = () => {
  return (
    <>
      <div className="bg-[#f7d0b6] py-20">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-5xl ">
              Demonstration video of application in action
            </h2>
          </div>
        </div>
      </div>
      <div className="justify-center flex p-10 my-10">
        <iframe
          className="w-3/5 h-screen rounded-lg border-spacing-2 border-2"
          src="https://www.youtube.com/embed/uzJBcI5ZBkM"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media;"
        ></iframe>
      </div>
    </>
  );
};

export default Video;
