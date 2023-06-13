import React from 'react'

export default function NavBar(props) {
    return (
      <div>
        <nav className={`navbar  fixed-top  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <h2>Daily News </h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li> 
      </ul>
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.modetxt}</label>
</div>
    </div>
   
  </div>
</nav>
      </div>
    )
}
