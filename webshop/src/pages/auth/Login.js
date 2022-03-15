import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loggedInService} from '../../services/loggedInService';
import AuthContext from '../../store/authContext';

function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const ctx = useContext(AuthContext);
    // ctx.loggedIn;
    
    function onLogin (event) {
        event.preventDefault();
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCg9lc8-EOWthX3iqj-mBuc8L_KY2L9hqo";
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
               ctx.onLogin();
            //    sessionStorage.setItem("loggedIn", true);
            //    loggedInService.sendIsLoggedIn(true);
            } else {
                return res.json();
            }
        }).then(data => {
            if (data) {
                setErrorMessage(data.error.message);
            }
        });
    }   
    

    return (
    <div>
        <div>{errorMessage}</div>
    <form onSubmit={onLogin}>
        <label>E-mail</label><br />
        <input type="text" ref={emailRef} /><br />
        <label>Parool</label><br />
        <input type="password" ref={passwordRef} /><br />
        <button>Logi sisse</button>
    </form>

    </div>);
}

export default Login;