import React from 'react';

const VendorsTable = () => {
    const vendors = [
        { name: 'ABC Solutions', type: 'IT Consulting', rating: 4, projects: '1.1K' },
        { name: 'XYZ Networks', type: 'Cloud Solutions', rating: 4, projects: '989' },
        { name: 'ABC Solutions', type: 'IT Consulting', rating: 3, projects: '1.1K' },
        { name: 'XYZ Networks', type: 'Cloud Solutions', rating: 4, projects: '989' },
        { name: 'ABC Solutions', type: 'IT Consulting', rating: 4, projects: '1.1K' },
        { name: 'XYZ Networks', type: 'Cloud Solutions', rating: 4, projects: '989' },
        { name: 'ABC Solutions', type: 'IT Consulting', rating: 4, projects: '1.1K' },
        { name: 'XYZ Networks', type: 'Cloud Solutions', rating: 4, projects: '989' },
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} style={{ color: i < rating ? 'green' : '#ccc', fontSize: '16px' }}>★</span>
        ));
    };

    return (
        <div className="table-wrapper">
            <div className="header">
                <div>
                    <h1 className="title">Top Vendors in the Market</h1>
                    <p className="subtitle">
                        Ratings and reviews ensure transparency, helping you choose best service providers with confidence.
                    </p>
                </div>
                <button className="explore-btn">Explore all Deals →</button>
            </div>
            <table className="vendors-table">
                <thead>
                    <tr>
                        <th>Vendor Name</th>
                        <th>Business Type</th>
                        <th>Ratings</th>
                        <th>Completed Projects</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor, index) => (
                        <tr key={index}>
                            <td>{vendor.name}</td>
                            <td>{vendor.type}</td>
                            <td>{renderStars(vendor.rating)}</td>
                            <td>{vendor.projects}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorsTable;
