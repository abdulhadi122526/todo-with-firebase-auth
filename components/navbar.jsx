import { Link } from "react-router-dom";





function Navbar(){


    return(
        <>
        <div className="navbar">
        <Link to={'login'}>Login</Link>
        <Link to={'SingUp'}>Signup</Link>
        <Link to={'Todo'}>Todo</Link>
        </div>
        </>
    )
}

export default Navbar;