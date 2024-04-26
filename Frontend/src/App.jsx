import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Find from './components/Find'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Find" element={<Find />} />
        
      </Routes>
    </>
  );
}

export default App;
