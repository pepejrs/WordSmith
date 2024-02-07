import React from "react";

const Member = (props) => {
  return (
    <>
      <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            className="object-center object-cover rounded-full h-36 w-36"
            src={props.gif}
            alt="photo"
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
          <p className="text-base text-gray-400 font-normal">{props.role}</p>
          {/* <p className="text-base text-gray-400 font-normal">{props.github}</p> */}
          <a href={props.github} target="_blank">
            <i className="fa-brands fa-2x fa-github pt-3"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member;
