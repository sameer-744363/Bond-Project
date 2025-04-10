import React from 'react';

const DealsTable = () => {
    const deals = [
        { title: '30% off on Cloud Services', vendor: 'ABC Tech', category: 'Cloud Services', expiry: 'Mar, 31 2025' },
        { title: '22% off on Development', vendor: 'Neo Technologies', category: 'Software Development', expiry: 'Apr, 31 2025' },
        { title: '30% off on Cloud Services', vendor: 'ABC Tech', category: 'Cloud Services', expiry: 'Mar, 31 2025' },
        { title: '22% off on Development', vendor: 'Neo Technologies', category: 'Software Development', expiry: 'Apr, 31 2025' },
        { title: '30% off on Cloud Services', vendor: 'ABC Tech', category: 'Cloud Services', expiry: 'Mar, 31 2025' },
        { title: '22% off on Development', vendor: 'Neo Technologies', category: 'Software Development', expiry: 'Apr, 31 2025' },
        { title: '30% off on Cloud Services', vendor: 'ABC Tech', category: 'Cloud Services', expiry: 'Mar, 31 2025' },
        { title: '22% off on Development', vendor: 'Neo Technologies', category: 'Software Development', expiry: 'Apr, 31 2025' },
    ];

    return (
        <div className="table-container">
            <div className="header">
                <div>
                    <h1 className="title">Top Deals in the Market</h1>
                    <p className="subtitle">
                        Discover the best deals and unbeatable discounts on top products and services in the market today!
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>
            <table className="deals-table">
                <thead>
                    <tr>
                        <th>Deal Title</th>
                        <th>Vendor</th>
                        <th>Category</th>
                        <th>Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {deals.map((deal, index) => (
                        <tr key={index}>
                            <td>{deal.title}</td>
                            <td>{deal.vendor}</td>
                            <td>{deal.category}</td>
                            <td>{deal.expiry}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DealsTable;
