import { Typography} from "@mui/material";
import { Link } from "react-router-dom";
import  { useRef, useState } from "react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {app } from '../config/firbase/firbaseconfig.js';
import { useNavigate } from "react-router-dom";

function SignUp(){

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate();
    const [error, setError]= useState('');

    const signUp = (e)=>{
        e.preventDefault()
        // firbase auth
        const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                setError(errorMessage)
                
            });





        email.current.value = ''
        password.current.value = ''

    }


    
    return(
        <>
             <Typography variant="h4" sx={{textAlign: 'center' , marginTop: '30px'}}>Register Your Todo</Typography>
             
            <form className="login" onSubmit={signUp}>
                <input type='email'  placeholder='Email' ref={email} /> <br/><br/>
                <input type='password' placeholder='Password'  ref={password} /> <br/><br/>
                <button type='submit'>Sign up</button> <br /> <br />
                <p style={{color: 'red'}}>{error}</p>
                <Link to={'/Login'} style={{color: "black"}}>Already have accunt</Link>
           </form>
        </>
    )
}
export default SignUp;