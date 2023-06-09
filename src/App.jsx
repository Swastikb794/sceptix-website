import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidenav/sidebar.jsx";
import Home from "./components/sidenav/Home.jsx";
import Events from "./components/sidenav/Events.jsx";
import Members from "./components/sidenav/Members.jsx";
import AboutUs from "./components/About/about.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/events" element={< AboutUs/>} />
          <Route path="/members" element={< TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App