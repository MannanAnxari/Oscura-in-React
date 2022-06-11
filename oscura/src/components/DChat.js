import React, { useEffect } from 'react'
import "./assets/css/join.css"
import { user } from "./Login";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:45/"

const DChat = () => {

    const socket = io(ENDPOINT, { transports: ['websocket'] });

    useEffect(() => {
        socket.on("connect", () => {
            alert("Hogaya")
        })
        return () => {
        }
    }, [])


    return (
        <div className='container joinCont'>
            <div className="joinContainer">
                <div className="header">

                    <h1>
                        Welcome <span className='fw-bold'> {user} to El Cuarto Oscuro</span>
                    </h1>
                </div>
                <div className="chatBox"></div>
                <div className="inputBox"></div>
            </div>

        </div>
    )
}

export default DChat