import React, { useState } from 'react';

const Contact = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // State to manage form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setIsSubmitted(true);

        // Optionally, reset form fields after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>

            {isSubmitted ? (
                <p className="text-green-500 mb-4">Thank you for your message! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;
