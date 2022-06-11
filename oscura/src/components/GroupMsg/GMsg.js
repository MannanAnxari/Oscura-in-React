import React from 'react'
import { } from "./gMsg.css";

function GMsg({ user, message, clas }) {
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    if (user) {
        return (
            <>
                <div className={`msgBox ${clas}`}>
                    {`${message}`}
                    {/* <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger fw-normal">
                        {user} 
                    </span> */}
                    <span className="badge bg-danger mx-2 fw-normal">{user}</span>
                    <p className="card-text"><small className="text-muted lefttxt">{formatAMPM(new Date)}</small></p>
                </div>

            </>
        )
    }
    else {

        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return (
            <>
                <div className={`msgBox ${clas}`}>
                    {/* <span className="top-0 start-100 translate-middle badge rounded-pill bg-secondary fw-normal">
                        You
                    </span> */}
                    {`${message} `}
                    <span className="badge bg-secondary mx-2 fw-normal">You</span>
                    <p className="card-text"><small className="text-muted righttxt">{formatAMPM(new Date)}</small></p>
                </div>
            </>
        )
    }
}

export default GMsg