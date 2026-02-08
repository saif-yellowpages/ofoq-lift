import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-primary-foreground hover:text-accent hover:bg-transparent"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {language === 'ar' ? 'English' : 'العربية'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
