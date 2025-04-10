import React from "react";

const dealsData = [
    {
        id: 1,
        company: "ABC Cloud Technologies",
        discount: "30%",
        category: "Cloud Services",
        offerEnds: "Mar 31 2025",
    },
    {
        id: 2,
        company: "Net Tech Consulting",
        discount: "14%",
        category: "IT Consulting",
        offerEnds: "Mar 31 2025",
    },
    {
        id: 3,
        company: "NextGen Software Dev",
        discount: "29%",
        category: "Software Development",
        offerEnds: "Mar 31 2025",
    },
    {
        id: 4,
        company: "Net Tech Consulting",
        discount: "14%",
        category: "IT Consulting",
        offerEnds: "Mar 31 2025",
    },
    {
        id: 5,
        company: "NextGen Software Dev",
        discount: "29%",
        category: "Software Development",
        offerEnds: "Mar 31 2025",
    },
    {
        id: 6,
        company: "ABC Cloud Technologies",
        discount: "30%",
        category: "Cloud Services",
        offerEnds: "Mar 31 2025",
    },
];

const Deals = () => {
    return (
        <div className="deal-container">
            <div className="d-header">
                <div>
                    <h1 className="title">Top Deals in the Market</h1>
                    <p className="subtitle">
                        Discover the best deals and unbeatable discounts on top products and services in the market today!
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>

            <div className="deal-grid">
                {dealsData.map((deal) => (
                    <div key={deal.id} className="deal-card">
                        <div className="deal-header">{deal.company}</div>
                        <div className="deal-body">
                            <div className="deal-discount">
                                {deal.discount} <span className="off-text">off</span>
                            </div>
                            <div className="deal-category">
                                Category <br />
                                <span className="deal-category-bold">{deal.category}</span>
                            </div>
                        </div>
                        <hr />
                        <div className="deal-footer">
                            <div className="offer-end">Offer Ends <br /> {deal.offerEnds}</div>
                            <button className="view-deal">View Deal</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
