import React from 'react';
import './css/App.css';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import AllEmployees from './components/AllEmployees';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="employees" element={<AllEmployees />} />
        </Route>
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
