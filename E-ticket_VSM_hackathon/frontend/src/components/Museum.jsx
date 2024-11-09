// import React from "react";
// import MuseumImg from "../assets/museum.jpeg";
// import './Museum.css'; // Import the CSS file

// const Museum = ({ museum, onClick }) => {
//     return (
//         <div className="museum-container" onClick={() => onClick(museum)}>
//             <div>
//                 <img
//                     src={MuseumImg}
//                     alt="Museum"
//                     className="museum-image"
//                 />
//             </div>
//             <div className="museum-content">
//                 <h2 className="museum-title">
//                     {museum.name.slice(0, 30)}
//                 </h2>
//                 <p className="museum-description">
//                     {museum.description.slice(0, 100)}...
//                 </p>
//             </div>
//             <div className="museum-buttons">
//                 <button className="museum-button museum-button-blue">
//                     Read More
//                 </button>
//                 <button className="museum-button museum-button-green">
//                     Book Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Museum;



// import React from "react";
// import MuseumImg from "../assets/museum.jpeg";
// import ManiBhavan from "../assets/mani bhavan.jpg";
// import Chatrapati from "../assets/chatrapati.jpg";
// import Kaneri from "../assets/kaneri.jpg";
// import Nehru from "../assets/nehru.jpg";
// import Raja from "../assets/raja.jpg";
// import Wax from "../assets/wax.jpg";
// import './Museum.css'; // Import the CSS file

// const Museum = ({ museum, onClick }) => {
//     return (
//         <div className="card" onClick={() => onClick(museum)}>
//             {/* Museum Image */}
//             <img
//                 src={ManiBhavan}
//                 alt="Museum"
//                 className="card__image"
//             />

//             {/* Overlay on Hover */}
//             <div className="card__overlay">
//                 <header className="card__header">
//                     <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
//                         <path />
//                     </svg>
//                     <img src={MuseumImg} alt="thumb" className="card__thumb" />
//                     <div>
//                         <h2 className="card__title">
//                             {museum.name.slice(0, 30)}
//                         </h2>
//                         <span className="card__tagline">
//                             {museum.location}
//                         </span>
//                         <span className="card__status">Open now</span>
//                     </div>
//                 </header>
//                 <p className="card__description">
//                     {museum.description.slice(0, 100)}...
//                 </p>

//                 {/* Buttons */}
//                 <div className="museum-buttons">
//                     <button className="museum-button museum-button-blue">
//                         Read More
//                     </button>
//                     <button className="museum-button museum-button-green">
//                         Book Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Museum;


import React from "react";
import MuseumImg from "../assets/museum.jpeg";
import ManiBhavan from "../assets/mani bhavan.jpg";
import Chatrapati from "../assets/chatrapati.jpg";
import Kaneri from "../assets/kaneri.jpg";
import Nehru from "../assets/nehru.jpg";
import Raja from "../assets/raja.jpg";
import Wax from "../assets/wax.jpg";
import './Museum.css'; // Import the CSS file

const imageMap = {
    "Mani Bhavan Gandhi Museum": ManiBhavan,
    "Chhatrapati Shivaji Maharaj Vastu Museum": Chatrapati,
    "Kaneri Math": Kaneri,
    "Nehru Planetarium": Nehru,
    "Raja Dinkar Kelkar Museum": Raja,
    "Sunil's Celebrity Wax Museum": Wax,
    // Add more mappings if needed
};

const Museum = ({ museum, onClick }) => {
    const museumImage = imageMap[museum.name] || MuseumImg; // Default to MuseumImg if no match

    return (
        <div className="card" onClick={() => onClick(museum)}>
            {/* Museum Image */}
            <img
                src={museumImage}
                alt={museum.name}
                className="card__image"
            />

            {/* Overlay on Hover */}
            <div className="card__overlay">
                <header className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                    </svg>
                    <img src={MuseumImg} alt="thumb" className="card__thumb" />
                    <div>
                        <h2 className="card__title">
                            {museum.name.slice(0, 30)}
                        </h2>
                        <span className="card__tagline">
                            {museum.location}
                        </span>
                        <span className="card__status">Open now</span>
                    </div>
                </header>
                <p className="card__description">
                    {museum.description.slice(0, 100)}...
                </p>

                {/* Buttons */}
                <div className="museum-buttons">
                    <button className="museum-button museum-button-blue">
                        Read More
                    </button>
                    <button className="museum-button museum-button-green">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Museum;
