import React from "react";
import { HeartPulse, MapPin, Clock, ShieldCheck, Search, PhoneCall, Building2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import '../css/aboutus.css'



const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Medi Locator</h1>
        <p className="text-muted mt-3">
          Medi Locator is a platform designed to help users quickly find medicines and nearby pharmacies.
          We aim to make healthcare more accessible, reliable, and stress-free for everyone.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <HeartPulse size={40} className="text-danger mb-3" />
              <h5 className="card-title">Healthcare Focused</h5>
              <p className="card-text text-muted">
                We connect patients with pharmacies, ensuring faster access to life-saving medicines.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <MapPin size={40} className="text-success mb-3" />
              <h5 className="card-title">Location-Based Search</h5>
              <p className="card-text text-muted">
                Find the nearest pharmacies and check medicine availability with just one click.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <Clock size={40} className="text-warning mb-3" />
              <h5 className="card-title">24/7 Availability</h5>
              <p className="card-text text-muted">
                Access pharmacy information anytime, especially during emergencies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <ShieldCheck size={40} className="text-primary mb-3" />
              <h5 className="card-title">Secure & Reliable</h5>
              <p className="card-text text-muted">
                Your data is protected, and the platform ensures accuracy of information.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <Search size={40} className="text-info mb-3" />
              <h5 className="card-title">Smart Search</h5>
              <p className="card-text text-muted">
                Quickly locate rare or out-of-stock medicines without hassle.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <PhoneCall size={40} className="text-success mb-3" />
              <h5 className="card-title">Pharmacy Connect</h5>
              <p className="card-text text-muted">
                Get contact details and reach out to pharmacies directly through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="fw-bold">Our Mission</h4>
        <p className="text-muted">
          To make medicine access simple, fast, and reliable for every individual, 
          ensuring no one faces delays in receiving essential healthcare.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
