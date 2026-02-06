import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">O</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-tight">
                  OFOQ LIFT
                </span>
                <span className="text-sm text-primary-foreground/70">Elevator Solutions</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for premium elevator solutions in Saudi Arabia. 
              We provide high-quality elevators and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Elevators
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Passenger Elevators
                </Link>
              </li>
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Freight Elevators
                </Link>
              </li>
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Hospital Elevators
                </Link>
              </li>
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Panoramic Elevators
                </Link>
              </li>
              <li>
                <Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Escalators
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Riyadh, Kingdom of Saudi Arabia</span>
              </li>
              <li>
                <a href="tel:+966501080031" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  +966 50 108 0031
                </a>
              </li>
              <li>
                <a href="mailto:info@ofoqlift.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  info@ofoqlift.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ofoq Lift. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent hover:bg-gold-dark transition-colors flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
