import React from 'react';

const customers = [
    { name: 'ACME Corp', industry: 'Heath Care', projects: '22.23K' },
    { name: 'FinTech Co', industry: 'Finance', projects: '767' },
    { name: 'ACME Corp', industry: 'Heath Care', projects: '22.23K' },
    { name: 'FinTech Co', industry: 'Finance', projects: '767' },
    { name: 'ACME Corp', industry: 'Heath Care', projects: '22.23K' },
    { name: 'FinTech Co', industry: 'Finance', projects: '767' },
    { name: 'ACME Corp', industry: 'Heath Care', projects: '22.23K' },
    { name: 'FinTech Co', industry: 'Finance', projects: '767' },
];

const projects = [
    { title: 'E-commerce Platform Development', budget: 'SAR 50,000–100,000', category: 'Software Development' },
    { title: 'NeoACME', budget: 'SAR 20,000–100,000', category: 'Finance' },
    { title: 'E-commerce Platform Development', budget: 'SAR 50,000–100,000', category: 'Software Development' },
    { title: 'NeoACME', budget: 'SAR 20,000–100,000', category: 'Finance' },
    { title: 'E-commerce Platform Development', budget: 'SAR 50,000–100,000', category: 'Software Development' },
    { title: 'NeoACME', budget: 'SAR 20,000–100,000', category: 'Finance' },
    { title: 'E-commerce Platform Development', budget: 'SAR 50,000–100,000', category: 'Software Development' },
    { title: 'NeoACME', budget: 'SAR 20,000–100,000', category: 'Finance' },
];

const CustomerProjects = () => {
    return (
        <div className="section-container">
            <div className="customers">
                <div className="header">
                    <h2>Top Customers</h2>
                    <button className="btn-purple">Explore Top Customers →</button>
                </div>
                <p className="desc">
                    Our top customers—valued partners in our journey of growth, success, and innovation—whose trust and loyalty.
                </p>
                <table className="customers-table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Industry</th>
                            <th>Projects Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((cust, idx) => (
                            <tr key={idx}>
                                <td>{cust.name}</td>
                                <td>{cust.industry}</td>
                                <td>{cust.projects}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="projects">
                <div className="header">
                    <h2>Recent Projects</h2>
                    <button className="btn-purple">Explore Projects →</button>
                </div>
                <p className="desc">
                    Our top customers—valued partners in our journey of growth, success, and innovation—whose trust and loyalty.
                </p>
                <table className="projects-table">
                    <thead>
                        <tr>
                            <th>Project Title</th>
                            <th>Budget Range</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((proj, idx) => (
                            <tr key={idx}>
                                <td>{proj.title}</td>
                                <td>{proj.budget}</td>
                                <td>{proj.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerProjects;
