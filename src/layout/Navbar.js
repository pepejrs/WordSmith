import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  
    const Auth =useContext(AuthContext)
    const navigate = useNavigate();
    function handleLogout(e){
        e.preventDefault()
        try{
            Auth.logout();
        }
        catch(error){
            console.log("error")
        }
    }
    function handleLogin(e) {
        e.preventDefault();
        navigate('/users/login');
      }
      
    
    return (
        
        <>
    <nav className="w-screen bg-slate-600 px-4 flex flex-row justify-between items-end min-h-max">
  <p>{Auth.currentUser}</p>
  {Auth.currentUser &&
  <button className="size-5 text-sm bg-sky-600 px-px " onClick={handleLogout}>Logout</button>
  }<button className="size-5 text-sm bg-sky-600 px-px" onClick={handleLogin}>Login</button>
  
  <Link to={`/myDocuments/${Auth.currentUser}`}>
  <button className="size-5 text-sm bg-sky-600 px-px" >MyDocuments

  </button>
  </Link>
  
  <Link to={`/myRequests/${Auth.currentUser}`}>

  <button className="size-5 text-sm bg-sky-600 px-px" >MyRequests
  </button>
  </Link>

  
</nav>


     </>
  )
}