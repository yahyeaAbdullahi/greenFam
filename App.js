import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import SystemLogs from './pages/SystemLogs';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import UserRestrictions from './pages/UserRestrictions';
import Navbar from './components/Navbar';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/*" element={<AdminRoute><Admin /></AdminRoute>} />
            <Route path="/logs" element={<AdminRoute><SystemLogs /></AdminRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin/user-restrictions" element={<AdminRoute><UserRestrictions /></AdminRoute>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App; 