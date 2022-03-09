import { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Signup(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    
    function onSignup (event) {
        event.preventDefault();
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCg9lc8-EOWthX3iqj-mBuc8L_KY2L9hqo";
        const data = {
            email:emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res);
            if (res.ok) {
               navigate("/admin/");
            }else{
                return res.json();
            }
        }).then(data => setErrorMessage(data.error.message));
    }   


    return (
     <div>
         <div>{errorMessage}</div>
    <form onSubmit={onSignup}>
        <label>E-mail</label> <br />
        <input type="text" ref={emailRef} /><br />
        <label>Parool</label><br />
        <input type="password" ref={passwordRef} /><br />
        <button>Registreeri</button>
    </form>
    
    </div>); 
}

export default Signup;