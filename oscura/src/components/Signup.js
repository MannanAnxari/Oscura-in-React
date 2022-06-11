import React from 'react'

function Signup() {
  return (
    <div className="containero container  cont">
    <div className="top mt-2"></div>
    <div className="title">
        <div className="icon mt-2"></div>
        <div className="text mt-2">Sign Up</div>
    </div>
    <form action="/gotoDARK">
        <div className="body">
            <div className="email fname">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="email fname">
                <label htmlFor="LastName">Last Name</label>
                <input type="text" id="LastName" name="LastName" />
            </div>
            <div className="email">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />
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
        <input type="submit" className="footer" value="Get Started" />
    </form>
</div >
  )
}

export default Signup