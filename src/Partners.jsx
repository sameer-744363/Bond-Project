import React from "react";

const partners = [
    { name: "Technology", logo: "https://www.wissenpoint.com/wp-content/uploads/2021/08/Technology.jpg", bgColor: "#0d2741" },
    { name: "Comtug", logo: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/499e7f114438289.603b86e5a9c65.png", bgColor: "#ffffff" },
    { name: "Finance", logo: "https://th.bing.com/th/id/OIP.tLuhIRn1LBXR5sodPPfw_wHaEK?rs=1&pid=ImgDetMain", bgColor: "#0d3b21" },
    { name: "Denside", logo: "https://th.bing.com/th/id/OIP.8Z_Uz0P8JK4L8to0uteyfwAAAA?rs=1&pid=ImgDetMain", bgColor: "#ffffff" },
    { name: "Sunbank", logo: "https://th.bing.com/th/id/OIP.Vb6hX_EnfpsOFUD7V0CS8wHaFm?w=540&h=408&rs=1&pid=ImgDetMain", bgColor: "#0d2741" },
    { name: "Simplicity", logo: "https://cdn.dribbble.com/users/141092/screenshots/1987995/simplicity.png", bgColor: "#4a9fd7" },
];

const Partners = () => {
    return (
        <div className="partner-container">
            <div className="partner-header">
                <h1 className="text">Partners</h1>
                <p className="subtext">
                    Building Strong Alliances for Exceptional Results
                </p>
            </div>
            <div className="grid4">
                {partners.map((partner, index) => (
                    <div key={index} className="card4" style={{ backgroundColor: partner.bgColor }}>
                        <img src={partner.logo} alt={partner.name} className="logo4" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
