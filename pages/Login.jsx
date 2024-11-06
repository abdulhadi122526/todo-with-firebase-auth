import {  Typography} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { app } from "../config/firbase/firbaseconfig";


function Login(){
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [error, setError]= useState('');

    const login = (e)=>{
        e.preventDefault();
        
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/todo')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            
        });
    }

    return(
        <div>
            <Typography variant="h4" sx={{textAlign: 'center' , marginTop: '30px'}}>Login your account</Typography>
            <form className="login" onSubmit={login}>
                <input type='email'  placeholder='Email' ref={email} /> <br/><br/>
                <input type='password' placeholder='Password'  ref={password} /> <br/><br/>
                <button type='submit'>Login</button> <br /> <br />
                <p style={{color: 'red'}}>{error}</p>
                <Link to={'/SingUp'} style={{color: "black"}}>Creat new account</Link>
           </form>
           
        </div>
    )
}
export default Login;