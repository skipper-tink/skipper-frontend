import React from 'react';
import './css/App.css';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import AllEmployees from './components/AllEmployees';
import Sidebars from './components/Sidebars';

function App() {
  return (
    <div className="App">
      <Sidebars />
      <Routes>
        <Route path="/" element={<AllEmployees />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
