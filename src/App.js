import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import images from './assets/image';

const services = [
  { title: 'Lawn Maintenance', image: images.lawn, description: 'Keep your lawn healthy and green with our regular maintenance services.' },
  { title: 'Snow Removal', image: images.snow, description: 'Efficient and fast snow clearing for walkways, driveways, and properties.' },
  { title: 'Janitorial Services', image: images.janitor, description: 'Full-scale janitorial services to ensure cleanliness at all times.' },
  { title: 'Litter Pick Up', image: images.litter, description: 'Clean surroundings with our dependable litter pick up service.' },
  { title: 'Junk Removal', image: images.junk, description: 'Get rid of unwanted items easily and responsibly with our junk removal services.' },
  { title: 'Hot/Cold Pressure Washing', image: images.pressure, description: 'Deep surface cleaning using advanced pressure washing techniques.' },
  { title: 'Post Construction Clean Up', image: images.postConstruction, description: 'Thorough cleaning after construction or renovation to remove dust and debris.' },
  { title: 'Window Cleaning', image: images.window, description: 'Crystal-clear results with streak-free shine for all your windows.' },
  { title: 'Home Cleaning', image: images.home, description: 'Ensure proper drainage with our effective gutter cleaning service.' },
  { title: 'Office Cleaning', image: images.office, description: 'Restore your surfaces by removing unwanted graffiti quickly and safely.' },
  { title: 'Deep Cleaning', image: images.deep, description: 'Maintain cleanliness and professionalism in your parking areas.' },
];

function ServiceDetail({ services }) {
  const { index } = useParams();
  const service = services[index];

  if (!service) return <div>Service not found.</div>;

  return (
    <div className="service-page">
      <h2>{service.title}</h2>
      <img src={service.image} alt={service.title} className="service-detail-img" />
      <p>{service.description}</p>
      <div className="service-buttons">
        <Link to="/quote"><button>Request a Quote</button></Link>
        <Link to="/booking"><button>Book Now</button></Link>
      </div>
    </div>
  );
}

function BookingPage() {
  return (
    <div className="form-page">
      <h2>Book Now</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Service Required" required />
        <input type="date" required />
        <textarea placeholder="Additional Notes" rows="4"></textarea>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

function QuotePage() {
  return (
    <div className="form-page">
      <h2>Request a Quote</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Location" required />
        <input type="text" placeholder="Service Needed" required />
        <textarea placeholder="Tell us more about your request" rows="4" required></textarea>
        <button type="submit">Get a Quote</button>
      </form>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <h2>About Us</h2>
      <p>
        Golden Green Services is committed to delivering top-quality cleaning and property maintenance
        services. With years of experience, we bring professionalism, efficiency, and attention to detail
        to every project.
      </p>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header className="sticky-header">
        <div className="container">
          <h1 className="site-title">Golden Green Services</h1>
          <nav>
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/quote">Request a Quote</Link>
            <Link to="/booking">Book Now</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="hero water-theme">
                <h2>Your Property, Our Priority</h2>
                <p>Expert Cleaning & Maintenance Services You Can Trust</p>
                <div className="hero-buttons">
                  <Link to="/quote"><button>Request a Quote</button></Link>
                  <Link to="/booking"><button>Book Now</button></Link>
                </div>
              </div>
              <div className="services">
                <h2>Our Services</h2>
                <div className="service-grid-scroll no-scrollbar">
                  <div className="service-grid-horizontal">
                    {services.map((service, index) => (
                      <Link to={`/services/${index}`} className="service-card" key={index}>
                        <img src={service.image} alt={service.title} />
                        <div className="service-title no-underline">{service.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <AboutSection />
              <ContactSection />
            </div>
          }
        />

        <Route path="/services/:index" element={<ServiceDetail services={services} />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>

      <footer className="footer">© 2025 Golden Green Services. All rights reserved.</footer>
    </Router>
  );
}

export default App;
