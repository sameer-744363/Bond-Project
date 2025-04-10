import React from "react";

const customer = [
    { name: "ACME Corp", industry: "Healthcare", projects: "15.3K", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoZ-UfrfMaY-IaiTZlnXayZdKDohfZveAr9QMSshmF1K5slWvTrevw8pMYpFSmt1uffE&usqp=CAU" },
    { name: "FinTech Co", industry: "Finance", projects: "100", logo: "https://static.vecteezy.com/system/resources/previews/015/618/443/original/fintech-financial-technology-logo-template-with-overlay-color-style-vector.jpg" },
    { name: "NeoACME", industry: "Finance", projects: "100", logo: "https://static.vecteezy.com/system/resources/previews/028/132/889/original/neo-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" },
    { name: "FinTech Co", industry: "Finance", projects: "1.2K", logo: "https://static.vecteezy.com/system/resources/previews/015/618/443/original/fintech-financial-technology-logo-template-with-overlay-color-style-vector.jpg" },
    { name: "NeoACME", industry: "Finance", projects: "100", logo: "https://static.vecteezy.com/system/resources/previews/028/132/889/original/neo-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" },
    { name: "Finance Co", industry: "Finance", projects: "1.2K", logo: "https://static.vecteezy.com/system/resources/previews/015/618/443/original/fintech-financial-technology-logo-template-with-overlay-color-style-vector.jpg" }
];

const TopCustomers = () => {
    return (
        <div className="customer-container">
            <div className="customer-head">
                <div>
                    <h1 className="title">Top Customers in the Market</h1>
                    <p className="subtitle">
                        Our top Customers - valued partners in our journey of growth, success, and innovation - whose trust and loyalty.
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>

            <div className="customer-grid">
                {customer.map((deal, index) => (
                    <div className="customer-card" key={index}>
                        <div className="customer-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span>{deal.name}</span>
                            <img className="customer-logo" src={deal.logo} alt={deal.name} />
                        </div>
                        <div className="customer-body">
                            <p className="industry">Industry <br></br> <strong>{deal.industry}</strong></p>
                            <div>
                                <p className="projects">
                                    <span className="projects-count" style={{ fontSize: "28px", color: "#000", textAlign: "right" }}>
                                        {deal.projects}
                                    </span> Projects
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="customer-footer">
                            <button className="view-details">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCustomers;
