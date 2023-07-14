
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<News key="general" category='general'/>} />
            <Route path="/business" element={<News key="business" category='business'/>} />
            <Route path="/sports" element={<News key="sports" category='sports'/>} />
            <Route path="/science" element={<News key="science" category='science'/>} />
            <Route path="/technology" element={<News key="technology" category='technology'/>} />

          </Routes>
      </div>
      </Router>
    )
  }
}



// export default App;
