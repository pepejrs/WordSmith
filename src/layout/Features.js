import React from "react";

const Features = () => {
  return (
    <>
      <div className="bg-[#f7d0b6] py-20">
        <div className="max-w-screen-lg mx-auto flex justify-center items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-5xl ">
              Bunch of features ....
            </h2>
          </div>
        </div>
      </div>
      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://i.gifer.com/Mr3W.gif"
                className="h-full w-full object-contain rounded-full"
                alt="ai.gif"
              />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                Artificial Intelligence at your fingertip!
              </h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">
                Multi user interaction using Socket IO
              </h2>
              <p className="text-sky-950 text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://i.gifer.com/QZJI.gif"
                className="h-full w-full object-contain rounded-full"
                alt="doc.gif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://i.gifer.com/8J48.gif"
                className="h-full w-full object-contain rounded-md"
                alt="editor.gif"
              />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                Aesthetic TextEditor
              </h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra
                nibh cras pulvinar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
