import React from 'react';
import './css/App.css';
import Authentication from './components/Authentication';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/Authentication" element={<Authentication />} />{' '}
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
