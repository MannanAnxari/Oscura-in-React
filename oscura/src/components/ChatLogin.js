
import React, { useState } from 'react'
import { Link } from "react-router-dom";

let user; 
let ifuser = false; 
function ChatLogin() {
    
    const sendUser = () => {
        ifuser = true;
        user = document.getElementById("join").value;
        document.getElementById("join").value = "";
    }
    
    const [name, setname] = useState("");

    return (
        <div className="container">
            <div className="wrapper" >
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                </div>
                <div className="text-center mt-4 name text-white">
                    Oscuro Room
                </div>
                <form className="p-3 mt-5" action='/main-screen'>
                    <div className="form-field d-flex align-items-center">
                        <span className="fa fa-user"></span>
                        <input type="text" name="userName" id="join" onChange={(e) => setname(e.target.value)} placeholder="Username" required />
                    </div>
                    <Link onClick={(e) => !name ? e.preventDefault() : null} to={"/main-screen"} > <input type='submit' onClick={sendUser} className="btn mt-2 fw-bold" value="#goto Oscuro" /></Link>

                </form>
            </div>
        </div>
    )
}

export default ChatLogin
export { user, ifuser }