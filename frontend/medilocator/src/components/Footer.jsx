import '../css/footer.css'
// function Footer()
// {
//     return(

//         <>
//      <div className="footer">
//         <div><h4>@copyright by MediLocator</h4></div>
//         <div><i className="fas fa-phone" ></i> <h3>9838173851</h3></div>
        
//     </div>
        
//         </>
//     )
// }
// export default Footer

import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Medi Locator</h4>
            <p>
              Medi Locator helps you find nearby pharmacies and medicines instantly, 
              making healthcare more accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/aboutus" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contactus" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <Mail size={18} className="me-2" /> medilocator@gmail.com
            </p>
            <p>
              <Phone size={18} className="me-2" /> +91 9838173851
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" className="text-white">
                <Facebook size={22} />
              </a>
              <a href="https://twitter.com" className="text-white">
                <Twitter size={22} />
              </a>
              <a href="https://instagram.com" className="text-white">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Medi Locator. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
