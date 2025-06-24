
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Zebra Foundation
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Scholarships</Link>
            <Link to="/training" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Training</Link>
            <Link to="/travel" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Travel</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Gallery</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </div>

          <Button asChild className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600">
            <Link to="/apply">Apply Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/scholarships" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Scholarships</Link>
              <Link to="/training" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Training</Link>
              <Link to="/travel" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Travel</Link>
              <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link to="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
