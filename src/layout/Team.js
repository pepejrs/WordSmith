import React from "react";
import Member from "./Member";

const Team = () => {
  return (
    <>
      <div className="bg-[#f7d0b6] w-full h-screen absolute -z-10"></div>
      <div class="bg-[#f7d0b6] max-w-6xl mx-auto px-4 py-12">
        <div class="text-center pb-12">
          <h1 class="font-black text-5xl font-heading text-sky-950">
            Check out our team__
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member
            gif={"https://i.gifer.com/xw.gif"}
            name={"Fezaan Hussain"}
            role={"Frontend Engineer"}
            github={""}
          />
          <Member
            gif={"https://i.gifer.com/o6m.gif"}
            name={"Shubham Mishra"}
            role={"Backend Engineer"}
            github={""}
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
            role={"ML man"}
            github={""}
          />
          <Member
            gif={"https://i.gifer.com/6oa.gif"}
            name={"Rahul"}
            role={"Nalla"}
            github={""}
          />
        </div>
      </div>
    </>
  );
};

export default Team;
