import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/arabic-logo.svg';
import DealsTable from './DealsTable';
import VendorsTable from './VendorsTables';
import CustomerProjects from './CustomersProjects';
import TechnologyCategories from './TopTechnologies';
import Partners from './Partners';
import Testimonial from './Testimonial';
import BlogSection from './BlogSection';
import MetricsSection from './KeyMatrics';
import Footer from './Footer';

const Page2 = () => {
    return (
        <>
            {/* Navbar */}
            <header className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="Bond" />
                </div>
                <input type="text" className="search-box" placeholder="Find Vendors, Services, or Products" />
                <nav className="navMenu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <button className="btn-primary">Post Project</button>
                    <button className="btn-secondary">Vendor Signup</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="landing-container">
                <div className="hero-content">
                    <p className="hero-text">
                        Find the Best <br />
                        <span className="highlight">IT Services, Products & Solutions</span>
                    </p>
                    <div className="buttons">
                        <button className="post-project">Post Your Project</button>
                        <button className="join-vendor">Join as a Vendor</button>
                    </div>
                    <input type="text" className="search-box2" placeholder="Find Vendors, Services, or Products" />
                    <div className='page-buttons'>
                        <Link to="/page1">
                            <button className='previous-page-button'>P1</button>
                        </Link>
                        <Link to="/page2">
                            <button className='next-page-button'>P2</button>
                        </Link>
                    </div>
                </div>
                <img
                    src="https://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMHN0b3JlfGVufDB8fDB8fHww"
                    alt="IT Services"
                    className="hero-image"
                />
            </section>
            <DealsTable />
            <VendorsTable />
            <CustomerProjects />
            <TechnologyCategories />
            <Partners />
            <Testimonial />
            <BlogSection />
            <MetricsSection />
            <Footer />
        </>
    );
};

export default Page2;
