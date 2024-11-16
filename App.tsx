import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Sessions from './pages/Sessions';
import AddClient from './pages/AddClient';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/add-client" element={<AddClient />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;