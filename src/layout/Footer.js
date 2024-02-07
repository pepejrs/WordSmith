import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900 w-full">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <a href="#">
              <img
                class="w-auto h-12"
                src="./images/wordsmithLogo.png"
                alt="WordSmith logo"
              />
            </a>

            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Get your hands on the best text editor{" "}
              <em className="text-gray-800">"WordSmith"</em>
            </p>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <Link to={"/users/login"}>
                {" "}
                <button class="group relative uppercase mt-5 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div class="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-black group-hover:text-gray-600">
                    Try now
                    {/* Try now */}
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <hr class="my-10 border-gray-200 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-md text-gray-500">
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="https://github.com/pepejrs/WordSmith"
                class="mx-2 text-md text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                <i class="fa-brands fa-github fa-2x"></i>{" "}
              </a>
              {/* <a
                href="#"
                class="mx-2 text-md text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Capstone Report{" "}
              </a> */}
              {/* <a
                href="#"
                class="mx-2 text-md text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Mentor: {" "}
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
