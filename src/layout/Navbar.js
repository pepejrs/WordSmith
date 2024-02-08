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
      <nav className="bg-gray-600 shadow dark:bg-gray-800 sticky top-0 z-50 w-full h-20 py-3">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 ">
          <Link to={`/`}>
            <h3 className="text-amber-200 absolute left-10 top-5 text-2xl font-semibold">
              WordSmith
            </h3>
          </Link>

          {Auth.currentUser ? (
            <>
              <Link
                to="/"
                className="border-b-2 border-transparent text-white hover:text-neutral-200 dark:hover:text-neutral-200 hover:border-amber-200 mx-1.5 sm:mx-6 -mt-3"
              >
                home
              </Link>

              <Link
                to={`/myDocuments/${Auth.currentUser}`}
                className="border-b-2 border-transparent text-white hover:text-neutral-200 dark:hover:text-neutral-200 hover:border-amber-200 mx-1.5 sm:mx-6 -mt-3"
              >
                Documents
              </Link>

              <Link
                to={`/myRequests/${Auth.currentUser}`}
                className="border-b-2 border-transparent text-white hover:text-neutral-200 dark:hover:text-neutral-200 hover:border-amber-200 mx-1.5 sm:mx-6 -mt-3"
              >
                Requests
              </Link>
              <button
                className="group absolute right-10 top-5 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                onClick={handleLogout}
              >
                <div className="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-gray-600 uppercase">
                  Logout
                </span>
              </button>
            </>
          ) : (
            <button
              className="group absolute right-10 h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={handleLogin}
            >
              <div className="absolute inset-0 w-3 bg-amber-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-gray-600 uppercase">
                Login
              </span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
