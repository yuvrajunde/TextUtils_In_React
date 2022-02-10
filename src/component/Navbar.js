import React from 'react'
import propTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import About from './About';

export default function Navbar(props) {
  
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">
            {props.aboutText}</Link>
        </li> */}
       
        
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}

<form>
  <div className="form-row align-items-center" >
    <div className="col-auto my-1">
      <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Choose color Preference.</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"   onChange={props.handlebar}
      >
        <option >Choose...</option>
        <option value="1">Red</option>
        <option value="2">Green</option>
        <option value="3">Yellow</option>
      </select>
      
    </div> 
  </div>
</form>





      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}   m-2`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleModeChange} />
    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
  )
}



Navbar.propTypes={
    title: propTypes.string,
    aboutText: propTypes.string

}