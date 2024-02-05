import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    try {
      Auth.logout();
    } catch (error) {
      console.log("error");
    }
  }
  function handleLogin(e) {
    e.preventDefault();
    navigate("/users/login");
  }

  return (
    <>
      <nav class="bg-gray-600 shadow dark:bg-gray-800 sticky top-0 z-50 w-full">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <h3 className="text-amber-200 absolute left-10 font-semibold">
            WordSmith
          </h3>
          <Link
            to="/"
            class="text-white dark:text-gray-200 border-b-2 border-amber-200 mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <Link
            to={`/myDocuments/${Auth.currentUser}`}
            class="border-b-2 border-transparent text-white hover:text-neutral-200 dark:hover:text-neutral-200 hover:border-amber-200 mx-1.5 sm:mx-6"
          >
            Documents
          </Link>

          <Link
            to={`/myDocuments/${Auth.currentUser}`}
            class="border-b-2 border-transparent text-white hover:text-neutral-200 dark:hover:text-neutral-200 hover:border-amber-200 mx-1.5 sm:mx-6"
          >
            Requests
          </Link>
          {Auth.currentUser ? (
            <button
              class="group absolute right-10 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={handleLogout}
            >
              <div class="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-gray-600">
                Logout
              </span>
            </button>
          ) : (
            <button
              class="group absolute right-10 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={handleLogin}
            >
              <div class="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-gray-600">
                Login
              </span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
