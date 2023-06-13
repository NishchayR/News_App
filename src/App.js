import React, { useState } from 'react'
import './App.css';

import NavBar from './components/NavBar';
import News from './components/News';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {

  const [mode, setMode] = useState('light');
  const [modetxt, setModetxt] = useState('Enable DarkMode');



  const toggle = () =>{
    if (mode==='light') {
      setMode('dark')
      setModetxt('Disable DarkMode')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      
    }
    else{
      setMode('light')
      setModetxt('Enable DarkMode')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
    
  }

    return (
      <div>
      <Router>
        <NavBar toggle={toggle} mode={mode} modetxt={modetxt}/>
        <div style={{height: '90px'}}></div>
        <Switch>
          <Route exact path="/">
          <News key={"general"} pageSize={9} country={"in"} category={"general"}  mode={mode}/>
          </Route>
          <Route exact path="/business">
          <News key={"business"} pageSize={9} country={"in"} category={"business"} tt={"Business"}  mode={mode}/>
          </Route>
          <Route exact path="/entertainment">
          <News key={"entertainment"} pageSize={9} country={"in"} category={"entertainment"} tt={"Entertainment"}  mode={mode}/>
          </Route>
          <Route exact path="/health">
          <News key={"health"} pageSize={9} country={"in"} category={"health"} tt={"Health"}  mode={mode}/>
          </Route>
          <Route exact path="/science">
          <News key={"science"} pageSize={9} country={"in"} category={"science"} tt={"Science"}  mode={mode}/>
          </Route>
          <Route exact path="/sports">
          <News key={"sports"} pageSize={9} country={"in"} category={"sports"} tt={"Sports"}  mode={mode}/>
          </Route>
          <Route exact path="/technology">
          <News key={"technology"} pageSize={9} country={"in"} category={"technology"} tt={"Technology"}  mode={mode}/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
}


