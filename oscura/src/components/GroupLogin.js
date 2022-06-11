import React, { useState } from 'react'
import { Link } from "react-router-dom";


let groupName;
let groupUsername;
let ifuserg = false;

const sendInfo = () => {
    ifuserg = true;
    groupName = document.getElementById("userName").value;
    document.getElementById("groupUsername").value = "";
    groupUsername = document.getElementById("groupUsername").value;
    document.getElementById("userName").value = "";
}
function GroupLogin() {

    const [gName, setgname] = useState("");


    return (
        <div className="container">
            <div className="wrapper" >
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
                </div>
                <div className="text-center mt-4 name text-white">
                    Oscuro Room
                </div>
                <form className="p-3 mt-4" action='/main-screen'>
                    <div className="form-field d-flex align-items-center">
                        <span className="fa fa-group"></span>
                        <input type="text" name="GroupName" id="userName" onChange={(e) => setgname(e.target.value)} placeholder="Group Name" required />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fa fa-user"></span>
                        <input type="text" name="username" id="groupUsername" placeholder="Username" required />
                    </div>
                    <Link onClick={(e) => !gName ? e.preventDefault() : null} to={"/main-screen"}>   <input type='submit' onClick={sendInfo} className="btn mt-2 fw-bold" value="#goto Oscuro" /></Link>
                </form>
                {/* <div className="text-center text-warning fs-6">
                    <a href="#" className='text-white'>Forget password?</a> or <a href="#" className='text-white'>Sign up</a>
                </div> */}
            </div>
        </div>
    )
}

export default GroupLogin
export { groupName, groupUsername, ifuserg }