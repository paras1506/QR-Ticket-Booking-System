import React from 'react';
import { FaTicketAlt, FaClock, FaQrcode, FaUsers, FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
import bookingImage from '../assets/booking.jpg'; // replace with your image path
import qrCodeImage from '../assets/qrcodeImage.png'; // replace with your image path

const About = () => {
  return (
    <div className="about-container max-w-[1160px] mx-auto px-6 py-12 text-richblack-100 m-14">
      
      {/* Header Section */}
      <div className="header-section flex flex-col items-center text-center text-pink-50 mb-12">
        <h1 className="text-4xl font-bold text-richblack-5 mb-4">Welcome to Our Museum Ticket Booking System</h1>
        <p className="text-lg leading-relaxed max-w-2xl">
          Where convenience meets culture! Plan your museum visit effortlessly, whether you’re a solo explorer, family, or group of enthusiasts. Experience smooth, efficient ticketing and easy access to exhibitions and special events.
        </p>
        <div className='flex flex-row gap-8'>
        <img src={bookingImage} alt="Museum Experience" className="w-400 h-400 mt-8 rounded-lg shadow-lg" />
        <img src={qrCodeImage} alt="QR Code Entry" className="w-500 h-500- mt-8 rounded-lg shadow-lg" />

        </div>
        
      </div>

      {/* Key Features Section */}
      <div className="features-section mt-16 text-pink-50">
        <h2 className="text-3xl font-semibold text-richblack-5 text-center mb-8">Key Features</h2>

        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 1 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaTicketAlt className="text-blue-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Seamless Online Booking</h3>
              <p>Book tickets instantly from your device—anytime, anywhere, without long queues!</p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaCalendarAlt className="text-green-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Flexible Ticket Options</h3>
              <p>Choose from single-day, multi-day, group, family, senior, student tickets, and more.</p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaQrcode className="text-yellow-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">QR Code Access</h3>
              <p>Receive a QR code for quick, contactless entry. Just scan and start your adventure!</p>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaClock className="text-red-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Real-Time Availability</h3>
              <p>Get the latest updates on exhibit openings, time slots, and availability.</p>
            </div>
          </div>

          {/* Feature Card 5 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaUsers className="text-purple-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Exclusive Events Access</h3>
              <p>Access exclusive events, guided tours, and early bird tickets for limited exhibitions.</p>
            </div>
          </div>

          {/* Feature Card 6 */}
          <div className="feature-card bg-richblack-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
            <FaAccessibleIcon className="text-teal-400 text-3xl" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Enhanced Accessibility</h3>
              <p>Enjoy dedicated accessible bookings, specialized tours, and assistive services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section mt-16 text-center text-pink-50">
        <h2 className="text-3xl font-semibold text-richblack-5 mb-4">Why Choose Our Ticket Booking System?</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Our mission is to make cultural exploration accessible by reducing the hassles of museum visits. We offer a user-friendly, secure system that caters to local visitors and tourists, connecting people with art, history, and knowledge.
        </p>
      </div>

      {/* Plan Your Visit CTA */}
      <div className="cta-section mt-16 text-center">
        <p className="text-lg text-pink-50 leading-relaxed max-w-2xl mx-auto">
          Plan your visit today and get ready to immerse yourself in the wonders of the museum!
        </p>
        <button className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
          Explore Ticket Options
        </button>
      </div>
    </div>
  );
}

export default About;
