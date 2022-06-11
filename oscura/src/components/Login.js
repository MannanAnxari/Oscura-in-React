import { Link } from "react-router-dom";
import React, { useState } from 'react'

let user;
const sendUser = () => {
    user = document.getElementById('userName').value;
    document.getElementById('userName').value = "";
}
function Login() {

    const [name, setname] = useState("Unknown");
    console.log(name);

    return (
        <div className="containero container ">
            <div className="top"></div>
            <div className="title">
                <div className="icon"></div>
                <div className="text">Login</div>
            </div>
            {/* <form action="/gotoDARK"> */}
            <div className="body">
                <div className="email">
                    <label htmlFor="email">Username</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} id="userName" name="email" />
                </div>
                <div className="pass">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" />
                </div>
                <div className="remember">
                    <label htmlFor="remember">
                        <input type="checkbox" id="remember" name="pass" />
                        Remember Me</label>
                </div>
            </div>
            {/* <input type="submit" className="footer" value="Get Started" /> */}
           <Link  onClick={(event) =>  !name ? event.preventDefault() : null} to="/gotoDARK"><button  onClick={sendUser} className="footer" style={{ border: "none", textDecoration: "none" }} >Get Started</button></Link> 
            {/* </form> */}
        </div >
    )
}

export default Login
export { user }