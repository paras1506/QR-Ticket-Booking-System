import React, { useState } from "react";
import Museum from "./Museum";
import BookingForm from "./BookingForm";
import './Museums.css'; // Import the CSS file

const Museums = () => {
    const museums = [
        {
            name: "Mani Bhavan Gandhi Museum",
            location: "Mumbai",
            description:
                "Mani Bhavan has a story to tell: it housed Gandhiji frequently during the times when he grew in stature and strength, from an agitator to a world figure by successfully introducing Satyagraha (individual as well as mass) as a new and effective weapon to fight all evil and injustice. Mani Bhavan was the epicenter of India’s struggle for freedom",
            established: 1955,
            timings: {
                open: "10:30 AM",
                close: "6:00 PM",
            },
            entry_fee: {
                adults: 20,
                children: 10,
                foreigners: 650,
            },
        },
        {
            name: "Chhatrapati Shivaji Maharaj Vastu Museum",
            location: "Mumbai",
            description:
                "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, formerly known as the Prince of Wales Museum of Western India, is one of the premier art and history museums in India. It is a not-for-profit organisation established by Act III of 1909 of the Bombay Legislation by the then Bombay Presidency, called the Prince of Wales Museum Act (now known as the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya Act).",
            established: 1922,
            timings: {
                open: "10:00 AM",
                close: "6:00 PM",
            },
            entry_fee: {
                adults: 150,
                children: 35,
                foreigners: 700,
            },
        },
        {
            name: "Kaneri Math",
            location: "Kolhapur",
            description:
                "Siddhagiri Gramjivan Museum (Kaneri Math) at Kaneri, Kolhapur district, Maharashtra, is a sculpture museum.This museum showcases different aspects of Gramjivan (village life). Gram means village and jeevan means life in the Marathi language.",
            established:1524,
            timings: {
                open: "09:00 AM",
                close: "6:30 PM",
            },
            entry_fee: {
                adults: 100,
                children: 50,
                foreigners: 500,
            },
        },
        {
            name: "Nehru Planetarium",
            location: "Mumbai",
            description:
                "The planetarium has been making learning Astronomy a pleasant experience.  It also has grown into a Center for the scientific study of astronomy and for a meeting of scientists and scholars for discussions and lectures, arranged periodically on various stellar and Astronomical events.",
            established: 1989,
            timings: {
                open: "10:00 AM",
                close: "5:45 PM",
            },
            entry_fee: {
                adults: 150,
                children: 150,
                foreigners: 250,
            },
        },
        {
            name: "Raja Dinkar Kelkar Museum",
            location: "Pune",
            description:
                "A minuscule lane, one among the many in the bustling, momentous city of Pune in Maharashtra, is home to Raja Dinkar Kelkar Museum, a rare anthology of Indian artifacts that echo myriad tales of a nostalgic legacy within the majestic archways and corridors.",
            established: 1962,
            timings: {
                open: "10:00 AM",
                close: "5:30 PM",
            },
            entry_fee: {
                adults: 100,
                children: 30,
                foreigners: 300,
            },
        },
        {
            name: "Sunil's Celebrity Wax Museum",
            location: "Lonavala",
            description:
                "The Sunil's Wax Museum is the ultimate entertainment experience for all. Enticing ones curiosity with marvelous attractions, the Sunil’s Wax Museum with its celebrities in plenty, make it capable for one who cannot afford a visit abroad to Madame Tussaud’s Museum in London, the ancestor in its kind",
            established: 1835,
            timings: {
                open: "09:30 AM",
                close: "09:30 PM",
            },
            entry_fee: {
                adults: 200,
                children: 200,
                foreigners: 100,
            },
        },
    ];
    const [museum, setMuseum] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = (museum) => {
        console.log(museum);
        setMuseum(museum);
        setIsOpen(!isOpen);
    };

    return (
        <>
            <BookingForm isOpen={isOpen} setIsOpen={setIsOpen} museum={museum} />
            <div className="museums-grid">
                {museums.map((museum, index) => (
                    <Museum key={index} museum={museum} onClick={toggleForm} />
                ))}
            </div>
        </>
    );
};

export default Museums;
