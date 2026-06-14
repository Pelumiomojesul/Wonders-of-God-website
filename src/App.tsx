import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sermons } from './pages/Sermons';
import { Events } from './pages/Events';
import { Ministries } from './pages/Ministries';
import { Give } from './pages/Give';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="events" element={<Events />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="give" element={<Give />} />
          <Route path="contact" element={<Contact />} />
          <Route path="visit" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
