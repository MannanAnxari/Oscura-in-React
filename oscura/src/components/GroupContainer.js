import Message from "../components/GroupMsg/GMsg"
import React, { useEffect, useState } from 'react'
import "./assets/css/join.css"
import './../App.css';
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { groupName, ifuserg, groupUsername } from "./GroupLogin";
import { user, ifuser } from "./ChatLogin";

// const ENDPOINT = "http://localhost:45/"
// const ENDPOINT = "https://el-oscuro.herokuapp.com/"
const ENDPOINT = "https://oscura-server.herokuapp.com/"

let socket;

function GroupContainer() {

  const [id, setid] = useState("");
  const [messages, setmessages] = useState([]);

  const send = () => {
    const message = document.getElementById('groupInput').value;
    socket.emit('message', { message, id });
    document.getElementById('groupInput').value = "";
  }
  // console.log(messages);

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ['websocket'] });
    socket.on("connect", () => {
      setid(socket.id);
      // alert("Connected")
    })
    socket.emit("joined", { user });

    socket.on("send", (data) => {
      setmessages([...messages, data]);
      // console.log(data.message);
    })
    socket.on('UserJoined', (data) => {
      console.log(data.user, data.message);
      // setmessages([...messages, data]);
    })
    socket.on('leave', (data) => {
      setmessages([...messages, data]);
      // console.log(data.message);
    })
    return () => {
      socket.disconnect();
      socket.off();
    }
  }, [])
  useEffect(() => {
    socket.on('sendMsg', (data) => {
      setmessages([...messages, data]);
      // console.log(`user : ${data.user}, Message : ${data.message}, id: ${data.id}`);
    })

    return () => {
      socket.off();
    }
  }, [messages])

  // const str = user.charAt(0).toUpperCase() + user.slice(1);
  let str;

  if (user === undefined) {
    str = undefined;
  }
  else {
    str = user.charAt(0).toUpperCase() + user.slice(1);
  }
let val = 5354;
let temp = 0
  // console.log(match);
  return (
    <>
      <div className='container mt-3' style={{height: "72%"}}>
        <div className="chatContainer">
          <div className="header text-center fw-bold" ><Link className="back-btn" to="/main-screen"><i className="mt-2 fa fa-caret-left basck-btn"></i></Link><h2>{str}</h2></div>
          <div className="chatBox">
            {messages.map((item, i) => <Message key={user.id} user={item.user === user ? "" : item.user} message={item.message} clas={item.id === id ? "right" : "left"} />)}
          </div>
          <div className="row mx-2 row-cont">
            <div className="inputBox col-md-10"> <input type="text" onKeyPress={(e) => e.key === "Enter" ? send() : null} id='groupInput' className='form-control' />
            </div>
            <div className="inputBox-Btn col-md-2">
              <button className="btn btn-danger" onClick={send}>Send <i className="fa fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupContainer