// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';  // Import the CSS file

// const BookingForm = ({ museum, isOpen, setIsOpen }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         confirmEmail: "",
//         visitDate: "",
//         numberOfChildren: "",
//         numberOfMales: "",
//         numberOfFemales: "",
//         totalCharges: 5000
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         navigate("/payment", {
//             state: {
//                 totalCost: 5000,
//                 title: museum.name,
//                 ticketData: formData,
//             },
//         });
//     };

//     if (!museum) return null;

//     return (
//         <div className={`booking-form-container ${!isOpen ? 'booking-form-hidden' : ''}`}>
//             <div className="booking-form-header">
//                 <h2>{museum.name}</h2>
//                 <button onClick={() => setIsOpen(false)}>&times;</button>
//             </div>
//             <form onSubmit={handleSubmit} className="booking-form">
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Confirm Email</label>
//                     <input
//                         type="email"
//                         name="confirmEmail"
//                         value={formData.confirmEmail}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Visit Date</label>
//                     <input
//                         type="date"
//                         name="visitDate"
//                         value={formData.visitDate}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Number of Children</label>
//                     <input
//                         type="number"
//                         name="numberOfChildren"
//                         value={formData.numberOfChildren}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Number of Males</label>
//                     <input
//                         type="number"
//                         name="numberOfMales"
//                         value={formData.numberOfMales}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Number of Females</label>
//                     <input
//                         type="number"
//                         name="numberOfFemales"
//                         value={formData.numberOfFemales}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="submit-button">
//                     <button type="submit">
//                         Proceed to payment
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookingForm.css'; // Import the CSS file

const BookingForm = ({ museum, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    visitDate: "",
    numberOfChildren: "",
    numberOfMales: "",
    numberOfFemales: "",
    totalCharges: 5000
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", {
      state: {
        totalCost: 5000,
        title: museum.name,
        ticketData: formData,
      },
    });
  };

  if (!museum) return null;

  return (
    <div className={`booking-form-container ${!isOpen ? 'booking-form-hidden' : ''}`}>
      <div className="booking-form-header">
        <h2>{museum.name}</h2>
        <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Confirm Email</label>
          <input 
            type="email" 
            name="confirmEmail" 
            value={formData.confirmEmail} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Visit Date</label>
          <input 
            type="date" 
            name="visitDate" 
            value={formData.visitDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Number of Children</label>
          <input 
            type="number" 
            name="numberOfChildren" 
            value={formData.numberOfChildren} 
            onChange={handleChange} 
          />
        </div>
        <div className="input-group">
          <label>Number of Males</label>
          <input 
            type="number" 
            name="numberOfMales" 
            value={formData.numberOfMales} 
            onChange={handleChange} 
          />
        </div>
        <div className="input-group">
          <label>Number of Females</label>
          <input 
            type="number" 
            name="numberOfFemales" 
            value={formData.numberOfFemales} 
            onChange={handleChange} 
          />
        </div>
        <div className="submit-button">
          <button type="submit">Proceed to payment</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
