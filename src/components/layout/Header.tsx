import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium transition-colors hover:text-accent ${
      isActive(path) ? "text-accent" : "text-primary-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+966501080031" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +966 50 108 0031
            </a>
            <a href="mailto:info@ofoqlift.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@ofoqlift.com
            </a>
          </div>
          <div className="text-muted-foreground">
            Riyadh, Kingdom of Saudi Arabia
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">O</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-primary block leading-tight">
                  OFOQ LIFT
                </span>
                <span className="text-xs text-muted-foreground">Elevator Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className={navLinkClass("/").replace("text-primary-foreground", "text-foreground")}>
                Home
              </Link>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${
                  location.pathname.includes("/products") || location.pathname.includes("/elevators") || location.pathname.includes("/brands")
                    ? "text-accent"
                    : "text-foreground"
                }`}>
                  Products <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/elevators" className="cursor-pointer">
                      Elevators
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/brands" className="cursor-pointer">
                      Brands
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className={navLinkClass("/about").replace("text-primary-foreground", "text-foreground")}>
                About Us
              </Link>
              <Link to="/contact" className={navLinkClass("/contact").replace("text-primary-foreground", "text-foreground")}>
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-border pt-2">
                <p className="text-sm text-muted-foreground mb-2">Products</p>
                <Link
                  to="/elevators"
                  className="block py-2 pl-4 font-medium text-foreground hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Elevators
                </Link>
                <Link
                  to="/brands"
                  className="block py-2 pl-4 font-medium text-foreground hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Brands
                </Link>
              </div>
              <Link
                to="/about"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Button asChild className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-semibold">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
