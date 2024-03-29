import React from "react";
import Member from "./Member";

const Team = () => {
  return (
    <>
      <div className="bg-[#f7d0b6] w-full h-screen absolute -z-10"></div>
      <div className="bg-[#f7d0b6] max-w-6xl mx-auto px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-black text-5xl font-heading text-sky-950">
            Check out our team__
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Member
            gif={"https://i.gifer.com/xw.gif"}
            name={"Fezaan Hussain"}
            role={"Frontend Engineer"}
            github={"https://github.com/Fezaan"}
          />
          <Member
            gif={"https://i.gifer.com/o6m.gif"}
            name={"Shubham Mishra"}
            role={"Backend Engineer"}
            github={"https://github.com/mshubham0403"}
          />
          <Member
            gif={"https://i.gifer.com/Xqg8.gif"}
            name={"Tanmay Kachroo"}
            role={"Figma Designer"}
            github={""}
          />
          <Member
            gif={"https://i.gifer.com/L6MI.gif"}
            name={"Anand Raj"}
            role={"AI model integration"}
            github={""}
          />
          <Member
            gif={"https://i.gifer.com/6oa.gif"}
            name={"Rahul"}
            role={"prompt refining"}
            github={""} 
          />
        </div>
      </div>
    </>
  );
};

export default Team;
