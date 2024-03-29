import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import axios from "axios";
import { URLContext } from "../contexts/URLContext";
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const SERVER_URL = useContext(URLContext);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(SERVER_URL + "/users/register", {
        username,
        password,
      });
      console.log(res);
      toast.success("Register Success")
      setTimeout(() => navigate("/users/login"), 1500);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.error(
          "Response error:",
          error.response.status,
          error.response.data
        );
        toast.error("Error in Registration")
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("Request error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  }

  return (
    <div class="bg-amber-50 flex justify-center items-center h-full">
      <ToastContainer/>
      <div class="w-11/12 h-screen hidden lg:block">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full pt-40"
          alt="Sample image"
        />
      </div>
      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-4/12">
        <h1 class="text-2xl font-semibold mb-4">Register</h1>
        <form action="#" method="POST">
          <div class="mb-4">
            <label for="username" class="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setUsername((prev) => e.target.value);
              }}
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword((prev) => e.target.value);
              }}
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <div class="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="text-blue-500"
            />
            <label for="remember" class="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <div class="mt-6 text-blue-500 text-center">
          <Link to="/users/login" className="hover:underling">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
