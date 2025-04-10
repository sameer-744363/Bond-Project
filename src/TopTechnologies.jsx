import React from "react";

const categories = [
    {
        title: "Cloud Solutions",
        subtitle: "Cloud Computing for Business Efficiency",
        description: "Secure cloud computing services for businesses, including storage, computing, and networking.",
        image: "https://th.bing.com/th/id/OIP.VEJnTNCUkFQfqYWRJLFfnAHaEl?rs=1&pid=ImgDetMain",
    },
    {
        title: "Mobile App Development",
        subtitle: "Building Seamless Mobile Experiences",
        description: "Creating intuitive and engaging mobile apps tailored to your needs.",
        image: "https://th.bing.com/th/id/OIP.eSsAdCUevbptplcKvFQqMQHaE8?rs=1&pid=ImgDetMain",
    },
    {
        title: "Cyber Security",
        subtitle: "Securing Your Digital World",
        description: "Safeguard your data with advanced cyber security solutions. Protecting systems from threats.",
        image: "https://th.bing.com/th/id/OIP.vrJKEXI9d4i4N7T805SGswHaE8?rs=1&pid=ImgDetMain",
    },
    {
        title: "Mobile App Development",
        subtitle: "Building Seamless Mobile Experiences",
        description: "Creating intuitive and engaging mobile apps tailored to your needs.",
        image: "https://th.bing.com/th/id/OIP.eSsAdCUevbptplcKvFQqMQHaE8?rs=1&pid=ImgDetMain",
    },
    {
        title: "Cyber Security",
        subtitle: "Securing Your Digital World",
        description: "Safeguard your data with advanced cyber security solutions. Protecting systems from threats.",
        image: "https://th.bing.com/th/id/OIP.vrJKEXI9d4i4N7T805SGswHaE8?rs=1&pid=ImgDetMain",
    },
    {
        title: "Cloud Solutions",
        subtitle: "Cloud Computing for Business Efficiency",
        description: "Secure cloud computing services for businesses, including storage, computing, and networking.",
        image: "https://th.bing.com/th/id/OIP.VEJnTNCUkFQfqYWRJLFfnAHaEl?rs=1&pid=ImgDetMain",
    },
];

const TechnologyCategories = () => {
    return (
        <div className="tech-container">
            <div className="tech-head">
                <div>
                    <h1 className="title">Top High-Demand Technology Categories</h1>
                    <p className="subtitle">
                        Ratings and reviews ensure transparency, helping you choose the best service providers with confidence.
                    </p>
                </div>
            </div>
            <div className="grid3">
                {categories.map((category, index) => (
                    <div key={index} className="card3">
                        <img src={category.image} alt={category.title} className="card-img3" />
                        <div className="card-content3">
                            <h2 className="card-title3">{category.title}</h2>
                            <p className="card-subtitle3">{category.subtitle}</p>
                            <p className="card-description3">{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCategories;
