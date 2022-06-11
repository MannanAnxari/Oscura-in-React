import socketIO from "socket.io-client";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import DChat from "./components/DChat";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { user, ifuser } from "./components/ChatLogin";

import ChatLogin from "./components/ChatLogin";
import GroupLogin from "./components/GroupLogin";
import Main from "./components/MainWin";
import ChatContainer from "./components/ChatContainer";
import GroupContainer from "./components/GroupContainer";

// const ENDPOINT = "http://localhost:45/";
// const socket = socketIO(ENDPOINT, {
//   transports: ['websocket']
// })
function App(props) {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route exact path="/" element={< Home />} />
          <Route exact path="/chat_login" element={< ChatLogin />} />
          <Route exact path="/group_login" element={< GroupLogin />} />
          <Route exact path="/main-screen/" element={< Main />} >
            <Route exact path="group-sec" element={< GroupContainer />} />
            <Route exact path="chat-sec" element={< ChatContainer />} />
          </Route>

          {/* <Route exact path="/main-screen/chat-sec" element={< ChatContainer />} ></Route>
          <Route exact path="/main-screen/group-sec" element={< GroupContainer />} ></Route> */}
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;

