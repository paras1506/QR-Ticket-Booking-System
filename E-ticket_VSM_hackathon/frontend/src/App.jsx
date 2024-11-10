import React, { useState } from "react"; // Added `useState` import
import Navbar from "./components/Navabar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import UserProfile from './components/UserProfile'; // Ensure correct capitalization
import Dashboard from './pages/Dashboard';
import MuseumDetail from "./pages/MuseumDetail";
import PrivateRoute from "./components/PrivateRoute";
// Import Contact component if used
// import Contact from './pages/Contact';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = {}; // Define or retrieve `user` object as needed

    return (
        <div className="bg-gray-900 min-h-screen w-full font-main">
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/profile" element={<UserProfile user={user} />} />
                <Route path="/dashboard" element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
                <Route path="/payment" element={<PaymentPage />} />
                {/* Uncomment and import Contact component if available */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/about" element={<About setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/museum/:museumName" element={<MuseumDetail />} />
            </Routes>
        </div>
    );
};

export default App;
