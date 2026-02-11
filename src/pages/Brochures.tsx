import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import brochureCover from "@/assets/brochure-cover.jpg";

const Brochures = () => {
  const { t, isRTL } = useLanguage();

  const brochures = [
    {
      title: isRTL ? "ملف تعريف شركة أفق للمصاعد" : "Ofoq Elevators Company Profile",
      description: isRTL
        ? "ملف تعريفي شامل عن شركة أفق للمصاعد يتضمن رؤيتنا ورسالتنا وقيمنا ومنتجاتنا وخدماتنا."
        : "A comprehensive company profile of Ofoq Elevators featuring our vision, mission, values, products, and services.",
      language: isRTL ? "العربية" : "Arabic",
      pages: "12",
      fileSize: "2.5 MB",
      coverImage: brochureCover,
      downloadUrl: "/brochures/Ofoq_Elevators_Brochure_Arabic.pdf",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              {isRTL ? "الكتيبات" : "Brochures"}{" "}
              <span className="text-accent">
                {isRTL ? "والمطبوعات" : "& Downloads"}
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {isRTL
                ? "تصفح وحمّل كتيباتنا التعريفية لمعرفة المزيد عن منتجاتنا وخدماتنا."
                : "Browse and download our brochures to learn more about our products and services."}
            </p>
          </div>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brochures.map((brochure, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Cover Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={brochure.coverImage}
                    alt={brochure.title}
                    className="w-full h-full object-cover img-animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {brochure.language}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                    {brochure.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {brochure.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {brochure.pages} {isRTL ? "صفحات" : "pages"}
                    </span>
                    <span>{brochure.fileSize}</span>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold"
                  >
                    <a href={brochure.downloadUrl} download>
                      <Download className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {isRTL ? "تحميل الكتيب" : "Download Brochure"}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            {isRTL ? "تحتاج نسخة مطبوعة؟" : "Need a Printed Copy?"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            {isRTL
              ? "تواصل معنا وسنرسل لك نسخة مطبوعة من كتيباتنا."
              : "Contact us and we'll send you a printed copy of our brochures."}
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold"
          >
            <a href="mailto:info@ofoqlift.com">
              {isRTL ? "راسلنا" : "Email Us"}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Brochures;
