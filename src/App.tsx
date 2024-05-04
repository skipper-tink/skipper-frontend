import React from 'react';
import './css/App.css';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import AllEmployees from './components/AllEmployees';
import Layout from './components/Layout';
import Signup from './components/Signup';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="employees" element={<AllEmployees />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
