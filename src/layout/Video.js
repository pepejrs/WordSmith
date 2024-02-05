import React from "react";

const Video = () => {
  return (
    <>
      <div class="bg-[#f7d0b6] py-20">
        <div class="max-w-screen-lg mx-auto flex justify-center items-center">
          <div class="max-w-xl">
            <h2 class="font-black text-sky-950 text-5xl ">
              Demonstration video of application in action
            </h2>
          </div>
        </div>
      </div>
      <div className="justify-center flex p-10 my-10">
        <iframe
          className="w-3/5 h-screen rounded-lg border-spacing-2 border-2"
          src="https://www.youtube.com/embed/EE-xtCF3T94?si=3fMnmA7fyFiKT5YF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media;"
        ></iframe>
      </div>
    </>
  );
};

export default Video;
