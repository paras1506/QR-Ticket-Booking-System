// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css'; // Import the external CSS

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="navbar-title">Museum Visitor</div>
//                 <div className="navbar-links-md">
//                     <Link to="/home" className="navbar-link">
//                         Home
//                     </Link>
//                     <Link to="/about" className="navbar-link">
//                         About
//                     </Link>
//                     <Link to="/services" className="navbar-link">
//                         Services
//                     </Link>
//                     <Link to="/contact" className="navbar-link">
//                         Contact
//                     </Link>
//                 </div>
//                 <div className="navbar-menu-btn md:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         className="navbar-menu-btn"
//                     >
//                         <svg
//                             className="navbar-menu-icon"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d={
//                                     isOpen
//                                         ? "M6 18L18 6M6 6l12 12"
//                                         : "M4 6h16M4 12h16m-7 6h7"
//                                 }
//                             ></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="navbar-menu">
//                     <Link to="/home" className="navbar-menu-link">
//                         Home
//                     </Link>
//                     <Link to="/about" className="navbar-menu-link">
//                         About
//                     </Link>
//                     <Link to="/services" className="navbar-menu-link">
//                         Services
//                     </Link>
//                     <Link to="/contact" className="navbar-menu-link">
//                         Contact
//                     </Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css'; // Import the external CSS

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="navbar-title">Museum Visitor</div>
//                 <div className="navbar-links-md">
//                     <Link to="/home" className="navbar-link">
//                         Home
//                     </Link>
//                     <Link to="/about" className="navbar-link">
//                         About
//                     </Link>
//                     <Link to="/services" className="navbar-link">
//                         Services
//                     </Link>
//                     <Link to="/contact" className="navbar-link">
//                         Contact
//                     </Link>
//                 </div>
//                 <div className="navbar-menu-btn md:hidden">
//                     <button onClick={toggleMenu} className="navbar-menu-btn">
//                         <svg
//                             className="navbar-menu-icon"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//                             ></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="navbar-menu">
//                     <Link to="/home" className="navbar-menu-link">
//                         Home
//                     </Link>
//                     <Link to="/about" className="navbar-menu-link">
//                         About
//                     </Link>
//                     <Link to="/services" className="navbar-menu-link">
//                         Services
//                     </Link>
//                     <Link to="/contact" className="navbar-menu-link">
//                         Contact
//                     </Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the external CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">Museum Visitor</div>
                <div className="navbar-links-md">
                    <Link to="/home" className="navbar-link">
                        Home
                    </Link>
                    <Link to="/about" className="navbar-link">
                        About
                    </Link>
                    {/* <Link to="/services" className="navbar-link">
                        Services
                    </Link> */}
                    <Link to="/contact" className="navbar-link">
                        Contact
                    </Link>
                    {/* Add Login, Signup, UserProfile, AdminDashboard Buttons */}
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                    <Link to="/signup" className="navbar-link">
                        Signup
                    </Link>
                    <Link to="/userprofile" className="navbar-link">
                        User Profile
                    </Link>
                    <Link to="/dashboard" className="navbar-link">
                        Admin Dashboard
                    </Link>
                </div>
                <div className="navbar-menu-btn md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="navbar-menu-btn"
                    >
                        <svg
                            className="navbar-menu-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="navbar-menu">
                    <Link to="/home" className="navbar-menu-link">
                        Home
                    </Link>
                    <Link to="/about" className="navbar-menu-link">
                        About
                    </Link>
                    <Link to="/services" className="navbar-menu-link">
                        Services
                    </Link>
                    <Link to="/contact" className="navbar-menu-link">
                        Contact
                    </Link>
                    {/* Add Menu Links for Login, Signup, UserProfile, AdminDashboard */}
                    <Link to="/login" className="navbar-menu-link">
                        Login
                    </Link>
                    <Link to="/signup" className="navbar-menu-link">
                        Signup
                    </Link>
                    <Link to="/userprofile" className="navbar-menu-link">
                        User Profile
                    </Link>
                    <Link to="/admindashboard" className="navbar-menu-link">
                        Admin Dashboard
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
 