import React from 'react';
import './css/App.css';
import Authentication from './pages/Authentication';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import AllEmployees from './pages/AllEmployees';
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="employees" element={<AllEmployees />} />
          <Route path="profile/:id" element={<ProfilePage />} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
