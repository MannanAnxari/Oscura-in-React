import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

        <div className="container-fluid">
            <Link className="navbar-brand text-danger" to="/">D&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;K</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" style={{opacity: .3}}>Start With:</a>
                    </li>
                    <li className="nav-item link-item">
                        <Link className="nav-link" aria-current="page" to="/chat_login">#<span className='link-itms fw-bold'>Chat</span></Link>
                    </li>
                    <li className="nav-item link-item">
                        <Link className="nav-link" to="/group_login">#<span className='link-itms fw-bold'>Group</span></Link>
                    </li> 
                </ul>
            </div>
        </div>
        </nav>
        
        //         <nav>
        //     <div class="logo ">
        //         <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Dark_logo.png" class="logo" alt="LOGO." /> </Link>
        //     </div>
        //     <div class="links " id="navbarNav">
        //         <div className=''><Link to="/login" className=''>Login</Link></div>
        //         <div className=''> <Link to="/signup" className=''>Signup</Link></div>
        //     </div>
        // </nav>
    )
}

export default Navbar