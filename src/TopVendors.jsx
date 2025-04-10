import React from "react";

const vendorsData = [
    {
        id: 1,
        name: "VM Ware Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://th.bing.com/th/id/OIP.6SCckBZYoV9p4etVJF6CjAHaEO?rs=1&pid=ImgDetMain",
    },
    {
        id: 2,
        name: "V Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://th.bing.com/th/id/OIP.1WHChpJynS6mzaSaKD4Z2QHaFj?rs=1&pid=ImgDetMain",
    },
    {
        id: 3,
        name: "SoftSol Tech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://th.bing.com/th/id/OIP.xdfSmaOGmJlL6-BPZOALzwHaHa?rs=1&pid=ImgDetMain",
    },
    {
        id: 4,
        name: "NetTech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://cdn.connectamericas.com/sites/default/files/styles/company_public_profile_picture/public/company-128122-1535409876.png?itok=66Ddn8or",
    },
    {
        id: 5,
        name: "VM Ware Cloud Technologies",
        category: "Cloud Solution",
        projects: "12.1K",
        rating: 4,
        description: "V Cloud Technologies specializes in innovative cloud computing solutions, offering scalable solutions.",
        logo: "https://th.bing.com/th/id/OIP.6SCckBZYoV9p4etVJF6CjAHaEO?rs=1&pid=ImgDetMain",
    },
    {
        id: 6,
        name: "SoftSol Tech Solutions",
        category: "IT Consulting",
        projects: "1.3K",
        rating: 4,
        description: "NetTech Solutions is a leading provider of cutting-edge IT and networking services.",
        logo: "https://th.bing.com/th/id/OIP.xdfSmaOGmJlL6-BPZOALzwHaHa?rs=1&pid=ImgDetMain",
    }
];

const TopVendors = () => {
    return (
        <div className="vendor-container">
            <div className="vendor-header">
                <div>
                    <h1 className="title">Top Vendors in the Market</h1>
                    <p className="subtitle">
                        Ratings and reviews ensure transparency, helping you choose best service providers with confidence.
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>
            <div className="vendor-grid">
                {vendorsData.map((vendor) => (
                    <div key={vendor.id} className="vendor-card">
                        <div className="vendor-logo">
                            <img src={vendor.logo} alt={vendor.name} />
                        </div>
                        <div className="vendor-info">
                            <h3 className="vendor-name">{vendor.name}</h3>
                            <p className="vendor-category">{vendor.category}</p>
                            <div className="vendor-projects">
                                Completed Projects: <strong>{vendor.projects}</strong>
                                <span className="vendor-rating">
                                    {"★".repeat(vendor.rating)}
                                    {"☆".repeat(5 - vendor.rating)}
                                </span>
                            </div>
                            <p className="vendor-description">{vendor.description}</p>
                            <button className="vendor-profile-btn">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopVendors;
