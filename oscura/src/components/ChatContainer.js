
import React from 'react'
import "./assets/css/join.css"
import './../App.css';
import { Link } from "react-router-dom";
import { user, ifuser } from "./ChatLogin";


function chatContainer() {
  return (
    <>
      <div className='container  mt-3'>
        <h1 className='text-center'>Chat Container</h1>
        <div className="text-center mt-5">
          <h2>Chat Container</h2>
          <h4>in Under Constructon</h4>
        </div>
        {/* <div class="list-group"> 
          <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
          <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
          <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
        </div> */}
      </div>
    </>
  )
}

export default chatContainer