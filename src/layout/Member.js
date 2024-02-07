import React from "react";

const Member = (props) => {
  return (
    <>
      <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src={props.gif}
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-gray-700 font-bold mb-2">{props.name}</p>
          <p class="text-base text-gray-400 font-normal">{props.role}</p>
          {/* <p class="text-base text-gray-400 font-normal">{props.github}</p> */}
          <a href={props.github} target="_blank">
            <i class="fa-brands fa-2x fa-github pt-3"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Member;
