import React, { useEffect } from 'react'
import "./assets/css/join.css"
import './../App.css';
import { Link, Outlet } from "react-router-dom";
import { user, ifuser } from "./ChatLogin";
import { groupName, ifuserg, groupUsername } from "./GroupLogin";


const ENDPOINT = "http://localhost:45/"




function MainWin() {
  // console.log(match);
  // console.log("User : ",user);
  // console.log("GName : ",groupName);
  // if (ifuser == true) {
  //   console.log("Your From Chat Link");
  // }
  // else if( ifuserg == true) {
  //   console.log("Your From group Link");

  // }
  // else{
  //   console.log("pata Nahi");
  // }

  // const socket = io(ENDPOINT, { transports: ['websocket'] });

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     alert("Hogaya")
  //   })
  //   return () => {
  //   }
  // }, [])

  // let myStyle = {
  //   width: "25%",
  //   height: "90%",
  //   background: "white",
  //   borderRadius: "2rem"
  // }
  let str;

  if (user === undefined) {
    str = undefined;
  }
  else {
    str = user.charAt(0).toUpperCase() + user.slice(1);
  }

  // const chat_Cont = document.getElementById("chat_container");
  // const main_sec = document.getElementById("main_sec");
  // const mainc = document.getElementById("mainnn");
  // const chat_Btn = () => {
  //   if (chat_Cont.style.display === "none") {
  //     // chat_Cont.style.display = "block";
  //     // main_sec.style.display = "none";
  //     mainc.classList.add("d-none")

  //   }
  // }
  // const group_Btn = () => {
  //   if (chat_Cont.style.display === "none") {
  //     // chat_Cont.style.display = "block";
  //     main_sec.style.display = "none";

  //   }
  // }

  return (
    // <BrowserRouter>
    <>

      <div className='container joinCont mt-5'>
        <div className="joinContainer">
          <div className="header">

            <h1>
              Welcome <span className='fw-bold'> <span className="name">{str}</span> to El Cuarto Oscuro</span>
            </h1>
          </div>
        </div>
        <div className="links-sec" id='main_sec'>
          <div className="row text-dark" id='mainnn'>
            <div className="col-md-12 fw-bold my-3 text-center"><h3> Welcome To Oscura</h3></div>
            <div className="linqs">

              <Link className='main-links' id='chat-btn' to={user === undefined ? "/chat_login" : "chat-sec"}><div className="col-md-10 links-box">Chat <i className="mt- fa fa-caret-right"></i></div></Link>
              <Link className='main-links' id='group-btn' to={user === undefined ? "/group_login" : "group-sec"}><div className="col-md-10 links-box">Group <i className="mt- fa fa-caret-right"></i></div></Link>
            </div>
          </div>
        </div>
        <div className="text-dark chat-box-container" id='chat_container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainWin