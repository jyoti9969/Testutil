import React from 'react'
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
 
//   Route,
//   Link
// } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand  text-${props.mode==='light'?'dark':'light'} href="#" `}>{props.title}</a>
    {/* <Link className={`navbar-brand  text-${props.mode==='light'?'dark':'light'} to="/" `}>{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0  text-${props.mode==='light'?'dark':'light'}`}>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
          {/* <Link className="nav-link active " aria-current="page" to="/">Home</Link> */}
     
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link " to="/About" >About</Link>
         
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link disabled " to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.enableDarkmode} type="checkbox" id="flexSwitchCheckDefault"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
      </>
    </div>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
}
Navbar.defaultProps={
    title:'stranger',
}