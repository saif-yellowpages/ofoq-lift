import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "@/i18n/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="flex-1 pt-20 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
