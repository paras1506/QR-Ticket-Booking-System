import React from 'react';
import { useParams } from 'react-router-dom';
import MuseumImg from "../assets/museum.jpeg";
import ManiBhavan from "../assets/mani bhavan.jpg";
import Chatrapati from "../assets/chatrapati.jpg";
import Kaneri from "../assets/kaneri.jpg";
import Nehru from "../assets/nehru.jpg";
import Raja from "../assets/raja.jpg";
import Wax from "../assets/wax.jpg";
import './MuseumDetail.css'; // Import the CSS file
import { Link } from "react-router-dom";

const imageMap = {
    "Mani Bhavan Gandhi Museum": ManiBhavan,
    "Chhatrapati Shivaji Maharaj Vastu Museum": Chatrapati,
    "Kaneri Math": Kaneri,
    "Nehru Planetarium": Nehru,
    "Raja Dinkar Kelkar Museum": Raja,
    "Sunil's Celebrity Wax Museum": Wax,
    // Add more mappings if needed
};

const museumsData = {
    "Mani Bhavan Gandhi Museum": {
        description: `Mani Bhavan Gandhi Museum, located in Mumbai, India, is a historical site dedicated to Mahatma Gandhi, the leader of the Indian independence movement. This house served as Gandhiji's residence in the city from 1917 to 1934. The museum is a tribute to his life, struggles, and ideologies.

The museum features exhibits showcasing his personal belongings, photographs, letters, and documents, along with a rich collection of Gandhian literature. A prominent feature is the room where Gandhi stayed, preserved as it was during his time in the city. The museum also highlights significant events in India's freedom struggle and Gandhi’s efforts in promoting non-violence, truth, and civil disobedience.

Mani Bhavan is not only a museum but also an important landmark in the history of India's independence movement. It provides visitors with a deeper understanding of Gandhi's philosophy and his role in shaping modern India.`,
        location: "Mumbai",
        // Add other details as needed
    },

    "Kaneri Math": {
        description: `Kaneri Math, located in Kolhapur, Maharashtra, is a spiritual and historical site dedicated to the teachings of Sanatan Dharma. The museum showcases various aspects of the spiritual practices and philosophies of the region, with a special focus on the historical and cultural significance of the Kaneri Math complex.

The museum exhibits ancient artifacts, scriptures, and photographs, highlighting the rich spiritual and cultural heritage of Kolhapur. It offers visitors a glimpse into the lives of the sages and the contributions of the Kaneri Math to the spiritual and cultural landscape of India.

Kaneri Math is not just a museum but a place of learning and reflection, where visitors can experience the profound teachings of Sanatan Dharma and understand its relevance in modern times.`,
        location: "Kolhapur, Maharashtra",
        // Add other details as needed
    },
    "Chhatrapati Shivaji Maharaj Vastu Museum": {
        description: `Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, also known as the Mumbai Museum or the Prince of Wales Museum, is located in Mumbai, India. It is one of the most prominent museums in the country, showcasing a vast collection of artifacts, sculptures, and artworks that represent the rich cultural heritage of India.

The museum's exhibits include a wide range of historical items from ancient India, including sculptures, decorative arts, and coins, as well as a significant collection of paintings and artifacts from the colonial era. It also has dedicated sections for natural history and the maritime history of India.

The museum is housed in an architectural masterpiece built in the Indo-Saracenic style and offers visitors a glimpse into India's past, from its ancient civilizations to the modern era. It is a must-visit for history and culture enthusiasts, as it preserves the essence of India’s diverse heritage.`,
        location: "Mumbai, Maharashtra",
        // Add other details as needed
    },

    "Nehru Planetarium": {
        description: `Nehru Planetarium, located in Mumbai, India, is one of the most popular science museums dedicated to astronomy and space science. Named after India's first Prime Minister, Jawaharlal Nehru, the planetarium offers an immersive experience in understanding the cosmos and its phenomena.

The planetarium features exhibits on various aspects of space exploration, the solar system, stars, and galaxies. It houses a state-of-the-art projection system that showcases astronomy-related shows, providing educational entertainment for visitors of all ages. The planetarium also conducts workshops, special events, and programs to inspire curiosity about space science and foster an interest in astronomy.

Nehru Planetarium is an excellent destination for science enthusiasts, students, and anyone interested in the mysteries of the universe.`,
        location: "Mumbai, Maharashtra",
        // Add other details as needed
    },

    "Raja Dinkar Kelkar Museum": {
        description: `The Raja Dinkar Kelkar Museum, located in Pune, Maharashtra, is a treasure trove of artifacts that showcase India's rich cultural and historical heritage. Established by Dr. Raja Dinkar Kelkar, the museum is known for its vast collection of sculptures, pottery, paintings, musical instruments, and textiles.

The museum's exhibits highlight the art, culture, and lifestyle of various regions of India, spanning centuries of history. It includes remarkable artifacts from the Maratha period, ancient coins, traditional weaponry, and intricately designed pottery. The museum provides visitors with a glimpse into India's artistic traditions and the evolution of its culture.

The Raja Dinkar Kelkar Museum is a must-visit for anyone interested in India's artistic and cultural legacy, offering an in-depth look at the country's diverse heritage.`,
        location: "Pune, Maharashtra",
        // Add other details as needed
    },
    "Sunil's Celebrity Wax Museum": {
        description: `Sunil's Celebrity Wax Museum, located in Lonavala, Maharashtra, is a unique museum that features life-like wax statues of prominent celebrities from around the world. The museum is known for its impressive collection of figures, including famous Bollywood actors, international stars, sports personalities, and political leaders.

Visitors can see and take photos with wax replicas of their favorite celebrities, making it a popular destination for both entertainment and tourism. The museum also offers interactive displays and fun experiences that attract visitors of all ages.

Sunil's Celebrity Wax Museum is a perfect destination for fans of celebrities, providing an opportunity to experience a close encounter with their idols in the form of meticulously crafted wax figures.`,
        location: "Lonavala, Maharashtra",
        // Add other details as needed
    },
    // Add data for other museums
};

const MuseumDetail = () => {
    const { museumName } = useParams();
    const museum = museumsData[museumName];
    const museumImage = imageMap[museumName] || MuseumImg;

    if (!museum) {
        return <div>Museum not found</div>;
    }

    return (
        <div className="museum-detail-container">
            <img
                src={museumImage}
                alt={museumName}
                className="museum-detail-image"
            />
            <h1 className="museum-detail-title">{museumName}</h1>
            <p className="museum-detail-description">{museum.description}</p>
            <p className="museum-detail-location">Location: {museum.location}</p>
            {/* Add more details here */}
            <Link to="/booking" className="museum-detail-button">
                Book Now
            </Link>


        </div>
    );
};

export default MuseumDetail;