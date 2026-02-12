import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import brochureCover from "@/assets/brochure-cover.jpg";
import controlPanelCover from "@/assets/covers/control-panel.jpg";
import elmoCover from "@/assets/covers/elmo.jpg";
import fujihdCover from "@/assets/covers/fujihd.jpg";
import futureFujiCover from "@/assets/covers/future-fuji.jpg";
import gearboxCover from "@/assets/covers/gearbox.jpg";
import gearlessLiftsCover from "@/assets/covers/gearless-lifts.jpg";
import gefranCover from "@/assets/covers/gefran.jpg";
import gentingCover from "@/assets/covers/genting.jpg";
import mertiCover from "@/assets/covers/merti.jpg";
import elevatorAccessoriesCover from "@/assets/covers/elevator-accessories.jpg";
import monarchCover from "@/assets/covers/monarch.jpg";
import sicorGearedCover from "@/assets/covers/sicor-geared.jpg";
import sicorGearlessCover from "@/assets/covers/sicor-gearless.jpg";
import vegaCover from "@/assets/covers/vega.jpg";

const Brochures = () => {
  const { isRTL } = useLanguage();

  const brochures = [
    {
      title: isRTL ? "ملف تعريف شركة أفق للمصاعد" : "Ofoq Elevators Company Profile",
      description: isRTL
        ? "ملف تعريفي شامل عن شركة أفق للمصاعد يتضمن رؤيتنا ورسالتنا وقيمنا ومنتجاتنا وخدماتنا."
        : "A comprehensive company profile featuring our vision, mission, values, products, and services.",
      language: isRTL ? "العربية" : "Arabic",
      pages: "12",
      fileSize: "2.5 MB",
      coverImage: brochureCover,
      downloadUrl: "/brochures/Ofoq_Elevators_Brochure_Arabic.pdf",
    },
    {
      title: isRTL ? "كتالوج لوحات التحكم والإكسسوارات" : "Control Panel & Accessories Catalog",
      description: isRTL
        ? "كتالوج شامل للوحات التحكم COP/LOP، الأزرار، الشاشات، أنظمة التحكم بالوصول والملحقات الإلكترونية."
        : "Complete catalog of COP/LOP panels, buttons, displays, access control systems, and electronic accessories.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "35",
      fileSize: "8 MB",
      coverImage: controlPanelCover,
      downloadUrl: "/brochures/Control_Panel_And_Accessories_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج مصاعد ELMO" : "ELMO Elevators Catalog",
      description: isRTL
        ? "كتالوج مصاعد شنغهاي ELMO يشمل مصاعد الركاب والبانوراما والشحن والفلل والسلالم المتحركة."
        : "Shanghai ELMO Elevator catalog featuring passenger, observation, freight, villa elevators, escalators, and moving walks.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "24",
      fileSize: "5 MB",
      coverImage: elmoCover,
      downloadUrl: "/brochures/ELMO_Elevators_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج FUJIHD" : "FUJIHD Elevator Catalog",
      description: isRTL
        ? "كتالوج مصاعد هينغدا فوجي يشمل جميع أنواع المصاعد مع تقنيات التصنيع الذكي 4.0."
        : "Hengda Fuji elevator catalog with full range of elevators and Industry 4.0 intelligent manufacturing technology.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "40",
      fileSize: "10 MB",
      coverImage: fujihdCover,
      downloadUrl: "/brochures/FUJIHD_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج مصاعد Future Fuji" : "Future Fuji Elevator Catalog",
      description: isRTL
        ? "كتالوج مصاعد سوتشو فيوتشر فوجي مع أنظمة السلامة المتقدمة وتصميم مريح وموفر للطاقة."
        : "Suzhou Future Fuji elevator catalog with advanced safety systems, comfort design, and energy-saving features.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "30",
      fileSize: "7 MB",
      coverImage: futureFujiCover,
      downloadUrl: "/brochures/FUTURE_FUJI_Elevator_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج علب التروس (Alberto Sassi)" : "Gearbox Catalog (Alberto Sassi)",
      description: isRTL
        ? "كتالوج أرغاني ساسي الإيطالية لعلب تروس المصاعد مع المواصفات الفنية الكاملة."
        : "Alberto Sassi Italian gearbox catalog with complete technical specifications for elevator traction machines.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "72",
      fileSize: "12 MB",
      coverImage: gearboxCover,
      downloadUrl: "/brochures/Gearbox_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج المحركات بدون تروس" : "Gearless Lifts Catalog",
      description: isRTL
        ? "كتالوج محركات المصاعد بدون تروس عالية الكفاءة والأداء."
        : "High-efficiency gearless traction machine catalog for modern elevator systems.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "20",
      fileSize: "4 MB",
      coverImage: gearlessLiftsCover,
      downloadUrl: "/brochures/Gearless_Lifts_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج محولات Gefran" : "Gefran Inverter Catalog",
      description: isRTL
        ? "كتالوج محولات ADL500 من Gefran المخصصة للمصاعد مع حلول توفير الطاقة والتحكم الذكي."
        : "Gefran ADL500 series inverters for elevators with energy-saving solutions and smart control features.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "16",
      fileSize: "3 MB",
      coverImage: gefranCover,
      downloadUrl: "/brochures/Gefran_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج منتجات Genting" : "Genting Product Catalog 2024",
      description: isRTL
        ? "كتالوج قطع غيار المصاعد والسلالم المتحركة من Genting يشمل لوحات التحكم والأبواب والمستشعرات."
        : "Genting elevator & escalator spare parts catalog including control boards, doors, sensors, and safety components.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "62",
      fileSize: "9 MB",
      coverImage: gentingCover,
      downloadUrl: "/brochures/Genting_Product_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج مصاعد Merti" : "Merti Elevator Catalog",
      description: isRTL
        ? "كتالوج مصاعد ميرتي يشمل مصاعد الركاب والبانوراما وبدون غرفة ماكينات مع تقنيات توفير الطاقة."
        : "Merti passenger, panoramic, and machine-room-less elevator catalog with energy-saving technologies.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "28",
      fileSize: "6 MB",
      coverImage: mertiCover,
      downloadUrl: "/brochures/Merti_Elevator_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج إكسسوارات المصاعد" : "Elevator Accessories Catalog",
      description: isRTL
        ? "كتالوج شامل لإكسسوارات المصاعد من أحذية التوجيه والمخمدات إلى المستشعرات والمفاتيح."
        : "Comprehensive elevator accessories catalog including guide shoes, buffers, sensors, and switches.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "18",
      fileSize: "3.5 MB",
      coverImage: elevatorAccessoriesCover,
      downloadUrl: "/brochures/Elevator_Accessories.pdf",
    },
    {
      title: isRTL ? "كتالوج حلول Monarch E-Package" : "Monarch E-Package Catalog",
      description: isRTL
        ? "كتالوج حلول Monarch الإلكترونية المتكاملة للمصاعد يشمل لوحات التحكم وواجهات HMI والملحقات."
        : "Monarch integrated elevator e-package solutions including control cabinets, HMI series, and complete accessories.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "50",
      fileSize: "11 MB",
      coverImage: monarchCover,
      downloadUrl: "/brochures/Monarch_E-Package_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج ماكينات SICOR المسننة" : "SICOR Geared Machines Catalog",
      description: isRTL
        ? "كتالوج ماكينات الجر المسننة من SICOR الإيطالية مع المواصفات الفنية والأبعاد التفصيلية."
        : "SICOR Italian geared traction machines catalog with detailed technical specifications and dimensions.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "36",
      fileSize: "8 MB",
      coverImage: sicorGearedCover,
      downloadUrl: "/brochures/SICOR_Geared_Machines_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج ماكينات SICOR بدون تروس" : "SICOR Gearless Machines Catalog",
      description: isRTL
        ? "كتالوج ماكينات الجر بدون تروس من سلسلة SG من SICOR مع جداول الأحمال والأداء."
        : "SICOR SG series gearless machines catalog with load tables, performance data, and traction sheave specifications.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "49",
      fileSize: "10 MB",
      coverImage: sicorGearlessCover,
      downloadUrl: "/brochures/SICOR_Gearless_Machine_Catalog.pdf",
    },
    {
      title: isRTL ? "كتالوج لوحة تحكم VEGA" : "VEGA Control Panel Catalog",
      description: isRTL
        ? "دليل المستخدم للوحة التحكم VEG2000 مع البرمجة والأسلاك ورسائل الأعطال."
        : "VEG2000 lift control board user manual with programming, wiring descriptions, and fault diagnostics.",
      language: isRTL ? "الإنجليزية" : "English",
      pages: "45",
      fileSize: "7 MB",
      coverImage: vegaCover,
      downloadUrl: "/brochures/VEGA_Control_Panel_Catalog.pdf",
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
                className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover group flex flex-col"
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
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                    {brochure.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {brochure.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {brochure.pages} {isRTL ? "صفحات" : "pages"}
                    </span>
                    <span>{brochure.fileSize}</span>
                  </div>

                  <div className="mt-auto pt-4">
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
