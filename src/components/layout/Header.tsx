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
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium transition-colors hover:text-accent ${
      isActive(path) ? "text-accent" : "text-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="tel:+966501080031" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +966 50 108 0031
            </a>
            <a href="mailto:info@ofoqlift.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@ofoqlift.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              {t('location')}
            </span>
            <LanguageSwitcher />
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
                  {isRTL ? 'أفق للمصاعد' : 'OFOQ LIFT'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {isRTL ? 'حلول المصاعد' : 'Elevator Solutions'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link to="/" className={navLinkClass("/")}>
                {t('home')}
              </Link>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${
                  location.pathname.includes("/products") || location.pathname.includes("/elevators") || location.pathname.includes("/brands")
                    ? "text-accent"
                    : "text-foreground"
                }`}>
                  {t('products')} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/elevators" className="cursor-pointer">
                      {t('elevators')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/brands" className="cursor-pointer">
                      {t('brands')}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className={navLinkClass("/about")}>
                {t('aboutUs')}
              </Link>
              <Link to="/contact" className={navLinkClass("/contact")}>
                {t('contactUs')}
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
                <Link to="/contact">{t('getQuote')}</Link>
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
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">{t('location')}</span>
                <LanguageSwitcher />
              </div>
              <Link
                to="/"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <div className="border-t border-border pt-2">
                <p className="text-sm text-muted-foreground mb-2">{t('products')}</p>
                <Link
                  to="/elevators"
                  className={`block py-2 ${isRTL ? 'pr-4' : 'pl-4'} font-medium text-foreground hover:text-accent`}
                  onClick={() => setIsOpen(false)}
                >
                  {t('elevators')}
                </Link>
                <Link
                  to="/brands"
                  className={`block py-2 ${isRTL ? 'pr-4' : 'pl-4'} font-medium text-foreground hover:text-accent`}
                  onClick={() => setIsOpen(false)}
                >
                  {t('brands')}
                </Link>
              </div>
              <Link
                to="/about"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {t('aboutUs')}
              </Link>
              <Link
                to="/contact"
                className="block py-2 font-medium text-foreground hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {t('contactUs')}
              </Link>
              <Button asChild className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-semibold">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  {t('getQuote')}
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
