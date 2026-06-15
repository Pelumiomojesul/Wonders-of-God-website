import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sermons } from './pages/Sermons';
import { Events } from './pages/Events';
import { Ministries } from './pages/Ministries';
import { Give } from './pages/Give';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { DashboardLibrary } from './pages/DashboardLibrary';
import { DashboardWatch } from './pages/DashboardWatch';
import { ScrollHandler } from './components/ScrollHandler';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="library" element={<DashboardLibrary />} />
            <Route path="watch" element={<DashboardWatch />} />
            <Route path="giving" element={<Give />} />
          </Route>

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
  </AuthProvider>
);
}
