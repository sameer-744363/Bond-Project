import React from "react";


const blogs = [
    {
        id: 1,
        title: "Accelerating Business Growth with Scalable Software Solutions",
        category: "Cloud Solutions – Software Development",
        description:
            "Cloud Solutions delivers scalable software that powers business growth. Explore how their agile development services accelerate digital transformation.",
        image: "https://media.istockphoto.com/id/963131214/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=r6hJwUZSXlaPjpxNfUl3SxwQaZ-DDEQnxfrrMmYOJyA=",
        date: "20 Jan 2025",
        link: "#",
    },
    {
        id: 2,
        title: "How FinTech is Reshaping the Future of Financial Services",
        category: "FinTech Co – Financial Technology",
        description:
            "FinTech Co drives financial innovation with secure, efficient digital solutions. Learn how their technologies are redefining the future of finance.",
        image: "https://mic.mediacdn.vn/zoom/600_315/Upload_Moi/2022_english/sandbox.jpg",
        date: "19 Jan 2025",
        link: "#",
    },
    {
        id: 3,
        title: "Revolutionizing Patient Care with Digital Healthcare Solutions",
        category: "ACME Corp – Healthcare",
        description:
            "ACME Corp is transforming healthcare with digital solutions that streamline operations and enhance patient outcomes. Discover how they’re shaping the future of healthcare.",
        image: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/news/wi/healthcare-homepage-5943fb92c5.jpg",
        date: "18 Jan 2025",
        link: "#",
    },
];

const BlogSection = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <div>
                    <h2 className="title">Blog & Insights</h2>
                    <p className="subtitle">
                        Explore the latest trends, expert opinions, and industry innovations from our trusted partners.
                    </p>
                </div>
                <button className="explore-btn">
                    Explore Blogs →
                </button>
            </div>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.category} className="blog-image" />
                        <div className="blog-content">
                            <p className="blog-category">{blog.category}</p>
                            <h3 className="blog-heading">
                                {blog.title} <a href={blog.link} className="blog-link">↗</a>
                            </h3>
                            <p className="blog-description">{blog.description}</p>
                            <p className="blog-date">Updated on <br /> <span>{blog.date}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
