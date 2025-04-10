import React from "react";

const metrics = [
    {
        title: "Total Vendors",
        value: "98.9K",
        change: "2.89%",
        changeType: "positive",
        progress: 78,
        icon: "👤",
    },
    {
        title: "Completed Projects",
        value: "296.7K",
        change: "2.89%",
        changeType: "negative",
        progress: 60,
        icon: "👤",
    },
    {
        title: "Active Deals",
        value: "200",
        change: "12.89%",
        changeType: "positive",
        progress: 46,
        icon: "👥",
    },
];

const MetricsSection = () => {
    return (
        <div className="metrics-container">
            <h2 className="metrics-title">Key Metrics & Statistics</h2>
            <p className="metrics-subtext">
                Measuring our impact through data-driven results and proven performance indicators.
            </p>
            <div className="metrics-grid">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric-card">
                        <div className="metric-header">
                            <h3>{metric.title}</h3>
                            <span className="metric-icon">{metric.icon}</span>
                        </div>
                        <div className="metric-value">
                            <strong>{metric.value}</strong>
                            <span className={`change ${metric.changeType}`}>
                                {metric.changeType === "positive" ? "▲" : "▼"} {metric.change}
                            </span>
                        </div>
                        <p className="metric-subtext">vs. previous month</p>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${metric.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricsSection;
