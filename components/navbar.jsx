import { Link } from "react-router-dom";


import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();


function Navbar(){

    const logout = ()=>{
        signOut(auth).then(() => {
            console.log("Sign-out successful.")
          }).catch((error) => {
            console.log(error);
            
          });
    }

    return(
        <>
        <div className="navbar">
        <Link to={'login'}>Login</Link>
        <Link to={'SingUp'}>Signup</Link>
        <Link to={'Todo'}>Todo</Link>
        <Link to={'/'} onClick={logout}>Logout</Link>
        </div>
        </>
    )
}

export default Navbar;