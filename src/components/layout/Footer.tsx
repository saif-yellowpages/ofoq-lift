import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ofoqLogo from "@/assets/ofoq-logo.svg";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src={ofoqLogo} alt="OFOQ Lift" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className={`text-primary-foreground/80 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('footerDescription')}
            </p>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('home')}</Link></li>
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('elevators')}</Link></li>
              <li><Link to="/brands" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('brands')}</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('aboutUs')}</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('contactUs')}</Link></li>
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('ourProductsFooter')}</h3>
            <ul className="space-y-3">
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('passengerElevators')}</Link></li>
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('freightElevators')}</Link></li>
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('hospitalElevators')}</Link></li>
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('panoramicElevators')}</Link></li>
              <li><Link to="/elevators" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('escalators')}</Link></li>
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-heading font-semibold text-lg mb-6">{t('contactUs')}</h3>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80" dir="ltr">{t('location')}</span>
              </li>
              <li>
                <a href="tel:+966501080031" className={`flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span dir="ltr">+966 50 108 0031</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ofoqlift.com" className={`flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  info@ofoqlift.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {isRTL ? 'أفق للمصاعد' : 'Ofoq Lift'}. {t('allRightsReserved')}.
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
