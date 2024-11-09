import React from "react";
import Navbar from "./components/Navabar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import Main from "./pages/Main";
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/Userprofile';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <div className="bg-gray-900 min-h-screen w-full font-main">
            <Navbar />
            <Routes>
                <Route path="/" element= {<Main/>} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" render={() => <UserProfile user={user} />} />
          <Route path="/admin" component={AdminDashboard} />
                <Route path="/home" element={<Home />} />
                <Route path="/payment" element={<PaymentPage />} />
                
            </Routes>
        </div>
    );
};

export default App;
