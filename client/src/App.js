import './App.css';
import React, { Fragment } from 'react';
import EventForm from './components/eventform';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/admin';
import EventsFinder from './components/eventsfinder';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<EventForm />}></Route>
      <Route path="/events" element={<EventForm />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin/events" element={<EventsFinder />}></Route>
    </Routes>
    
  );
}

export default App;
