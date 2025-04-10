import React, { useState } from "react";


const testimonials = [
    {
        name: "ACME Corp",
        logo: "https://logos-world.net/wp-content/uploads/2022/05/Acme-Logo-1984.png",
        role: "Emily Johnson, Senior Medical Officer (CMO)",
        text: "ACME Corp's healthcare solutions have transformed the way we manage patient care. Their innovative approach and reliable services have significantly improved our operational efficiency and patient satisfaction. We couldn’t be happier with the results!",
        rating: 5,
    },
    {
        name: "Sunbank",
        logo: "https://th.bing.com/th/id/OIP.Vb6hX_EnfpsOFUD7V0CS8wHaFm?w=540&h=408&rs=1&pid=ImgDetMain",
        role: "Jordan Smith, Chief Financial Officer (CFO)",
        text: "Sunbank Co has revolutionized our financial operations with their cutting-edge solutions. Their seamless platform and exceptional support have streamlined our processes, efficiency, and customer satisfaction. We highly recommend their services!",
        rating: 5,
    },
    {
        name: "Cloud Solutions",
        logo: "https://th.bing.com/th/id/OIP.VEJnTNCUkFQfqYWRJLFfnAHaEl?rs=1&pid=ImgDetMain",
        role: "Alex Martinez, Senior Software Engineer",
        text: "The Cloud Solutions has transformed our software development process in fast mode. Their expertise and seamless delivery have enhanced performance and customer satisfaction. A reliable partner for scalable growth!",
        rating: 5,
    },
];

const Testimonial = () => {
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        if (startIndex < testimonials.length - 1) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="container5">
            <div className="header-container5">
                <div>
                    <h2 className="heading5">Testimonial</h2>
                    <p className="subtext5">What Our Clients Say!</p>
                </div>
                <div className="buttons5">
                    <button className="button5" onClick={prevSlide} disabled={startIndex === 0}>
                        ←
                    </button>
                    <button className="button5" onClick={nextSlide} disabled={startIndex >= testimonials.length - 3}>
                        →
                    </button>
                </div>
            </div>
            <div className="carousel5">
                {testimonials.slice(startIndex, startIndex + 3).map((testimonial, i) => (
                    <div key={i} className="card5">
                        <div className="header5">
                            <img src={testimonial.logo} alt={testimonial.name} className="logo" />
                            <div className="stars5">⭐️⭐️⭐️⭐️⭐️</div>
                        </div>
                        <p className="name5">{testimonial.name}</p>
                        <p className="role5">— {testimonial.role}</p>
                        <p className="text5">“{testimonial.text}”</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
