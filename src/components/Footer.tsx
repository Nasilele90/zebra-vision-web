
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zebra Foundation</h3>
            <p className="text-gray-300 mb-4">
              Empowering dreams through education, design training, and global opportunities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/scholarships" className="text-gray-300 hover:text-white">Scholarships</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-white">Training Programs</Link></li>
              <li><Link to="/travel" className="text-gray-300 hover:text-white">Travel Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-white">Apply Now</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">info@zebrafoundation.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-gray-300">Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zebra Foundation. All rights reserved. Empowering futures worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
