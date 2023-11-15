import React from 'react';
import './css/App.css';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/registration" element={<Registration />}/> {/* 👈 Renders at /app/ */}
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}/> {/* 👈 Renders at /app/ */}
      </Routes>
      </header>
    </div>
  );
}

export default App;
