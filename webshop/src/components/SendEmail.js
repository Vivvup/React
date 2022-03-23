import {useRef} from 'react';

function SendEmail(){
    
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    function send(){
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "viivian.piir@gmail.com",
            Password : "A362F31AD4A510B604DD4FD9F37DC7AD2D49",
            To : 'viivian.piir@gmail.com',
            From : "viivian.piir@gmail.com",
            Subject : "This is the subject",
            Body : `Email tuli inimeselt: ${nameRef.current.value} . 
            Tema email: ${nameRef.current.value} ja tema sõnum:
            ${messageRef.current.value}
            `
        }).then(
          message => alert(message)
        );

    }
    return(
    <div>
    <label>Nimi</label><br />
    <input ref={nameRef} type="text" /><br />
    <label>Email</label><br />
    <input ref={emailRef} type="text" /><br />
    <label>Sõnum</label><br />
    <input ref={messageRef} type="text" /><br /><br />
    <button onClick={send}>SendEmail</button>
    </div>
    );
    
}
export default SendEmail;