import React from 'react';
import './css/App.css';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Authentication" element={<Authentication />} />{' '}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
