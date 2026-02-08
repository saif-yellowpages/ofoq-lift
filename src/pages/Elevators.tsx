import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Elevators = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { t, isRTL } = useLanguage();

  const categories = [
    { id: "all", name: t('allProducts') },
    { id: "passenger", name: t('passengerElevators') },
    { id: "freight", name: t('freightElevators') },
    { id: "hospital", name: t('hospitalElevators') },
    { id: "villa", name: t('villaElevators') },
    { id: "panoramic", name: t('panoramicElevators') },
    { id: "escalator", name: t('escalatorsMovingWalks') },
    { id: "parts", name: t('spareParts') },
  ];

  const elevatorProducts = [
    // Passenger Elevators
    {
      id: 1,
      category: "passenger",
      name: isRTL ? "مصعد ركاب بدون غرفة ماكينات" : "Machine Roomless Passenger Elevator",
      description: isRTL 
        ? "مصعد MRL حديث مع تقنية الجر بدون تروس. يوفر مساحة البناء مع تصميم مدمج بينما يقدم تشغيلًا سلسًا وموفرًا للطاقة."
        : "Modern MRL elevator with gearless traction technology. Saves building space with compact design while delivering smooth, energy-efficient operation.",
      features: isRTL 
        ? ["جر بدون تروس", "موفر للطاقة", "توفير المساحة", "ضوضاء منخفضة (50dB)"]
        : ["Gearless Traction", "Energy Efficient", "Space Saving", "Low Noise (50dB)"],
      capacity: "450-1600 kg",
      speed: "1.0-2.0 m/s",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "passenger",
      name: isRTL ? "مصعد ركاب بغرفة ماكينات صغيرة" : "Small Machine Room Passenger Elevator",
      description: isRTL
        ? "تصميم غرفة ماكينات مدمج مع محرك متزامن ذو مغناطيس دائم. مثالي للمباني ذات مساحة غرفة ماكينات محدودة."
        : "Compact machine room design with permanent magnet synchronous motor. Perfect for buildings with limited machine room space.",
      features: isRTL
        ? ["تصميم مدمج", "كفاءة عالية", "رحلة سلسة", "تحكم VFD"]
        : ["Compact Design", "High Efficiency", "Smooth Ride", "VFD Control"],
      capacity: "450-1000 kg",
      speed: "1.0-1.75 m/s",
      image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=400&h=300&fit=crop",
    },
    // Freight Elevators
    {
      id: 3,
      category: "freight",
      name: isRTL ? "مصعد شحن بدون غرفة ماكينات" : "Machine Roomless Freight Elevator",
      description: isRTL
        ? "مصعد شحن ثقيل مصمم للتطبيقات الصناعية. بناء متين مع كابينة معززة ومكونات متينة."
        : "Heavy-duty freight elevator designed for industrial applications. Robust construction with reinforced car and durable components.",
      features: isRTL
        ? ["سعة تحميل ثقيلة", "هيكل معزز", "تسوية دقيقة", "تصميم متين"]
        : ["Heavy Load Capacity", "Reinforced Structure", "Precise Leveling", "Durable Design"],
      capacity: "1000-5000 kg",
      speed: "0.25-1.0 m/s",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "freight",
      name: isRTL ? "مصعد السيارات" : "Automobile Elevator",
      description: isRTL
        ? "مصعد متخصص للنقل العمودي للسيارات. مثالي لصالات عرض السيارات ومرافق المواقف ومراكز الخدمة."
        : "Specialized elevator for vertical automobile transport. Ideal for car showrooms, parking facilities, and service centers.",
      features: isRTL
        ? ["سعة كبيرة", "أبواب واسعة", "أرضية شديدة التحمل", "تشغيل آمن"]
        : ["Large Capacity", "Wide Doors", "Heavy Duty Floor", "Safe Operation"],
      capacity: "2000-5000 kg",
      speed: "0.25-0.5 m/s",
      image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=400&h=300&fit=crop",
    },
    // Hospital Elevators
    {
      id: 5,
      category: "hospital",
      name: isRTL ? "مصعد أسرة المستشفى" : "Hospital Bed Elevator",
      description: isRTL
        ? "مصمم مع مراعاة راحة المريض. يتميز بوقت فتح باب ممتد وتشغيل سلس وداخلية مضادة للبكتيريا."
        : "Designed with patient comfort in mind. Features extended door opening time, smooth operation, and antibacterial interiors.",
      features: isRTL
        ? ["تشغيل سلس", "وقت فتح باب ممتد", "داخلية مضادة للبكتيريا", "ميزات الطوارئ"]
        : ["Smooth Operation", "Extended Door Time", "Antibacterial Interior", "Emergency Features"],
      capacity: "1600-2000 kg",
      speed: "1.0-2.0 m/s",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    },
    // Villa Elevators
    {
      id: 6,
      category: "villa",
      name: isRTL ? "مصعد فيلا منزلي" : "Villa Home Elevator",
      description: isRTL
        ? "مصعد منزلي أنيق مع داخلية قابلة للتخصيص. مثالي للفيلات السكنية مع خيارات تصميم فاخرة."
        : "Elegant home elevator with customizable interiors. Perfect for residential villas with luxurious design options.",
      features: isRTL
        ? ["تصميم قابل للتخصيص", "تشغيل هادئ", "مساحة صغيرة", "تشطيبات فاخرة"]
        : ["Customizable Design", "Quiet Operation", "Compact Footprint", "Premium Finishes"],
      capacity: "320-450 kg",
      speed: "0.4-0.6 m/s",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      category: "villa",
      name: isRTL ? "مصعد فيلا بحزام فولاذي" : "Steel Band Villa Elevator",
      description: isRTL
        ? "تقنية حزام فولاذي مبتكرة للتشغيل السلس والهادئ. هيكل فولاذي معياري للتركيب السهل."
        : "Innovative steel belt technology for smooth, quiet operation. Modular steel structure for easy installation.",
      features: isRTL
        ? ["دفع بحزام فولاذي", "هيكل معياري", "غلاف زجاجي", "تركيب سريع"]
        : ["Steel Belt Drive", "Modular Structure", "Glass Enclosure", "Quick Installation"],
      capacity: "320-630 kg",
      speed: "0.4-1.0 m/s",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
    // Panoramic Elevators
    {
      id: 8,
      category: "panoramic",
      name: isRTL ? "مصعد مراقبة نصف دائري" : "Semicircle Observation Elevator",
      description: isRTL
        ? "إطلالات بانورامية مذهلة مع تصميم زجاجي نصف دائري. مثالي لمراكز التسوق والمعالم المعمارية."
        : "Stunning panoramic views with semicircular glass design. Perfect for shopping malls and architectural landmarks.",
      features: isRTL
        ? ["زجاج مقسى", "إطلالات 360°", "إضاءة LED", "تصميم أنيق"]
        : ["Tempered Glass", "360° Views", "LED Lighting", "Elegant Design"],
      capacity: "630-1600 kg",
      speed: "1.0-1.75 m/s",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      category: "panoramic",
      name: isRTL ? "مصعد مراقبة مربع" : "Square Observation Elevator",
      description: isRTL
        ? "مصعد مراقبة بتصميم مربع معاصر. يجمع بين السلامة والجماليات المعمارية المذهلة."
        : "Contemporary square design observation elevator. Combines safety with stunning architectural aesthetics.",
      features: isRTL
        ? ["زجاج رقائقي", "تصميم قابل للتخصيص", "ميزات السلامة", "جماليات عصرية"]
        : ["Laminated Glass", "Customizable Design", "Safety Features", "Modern Aesthetics"],
      capacity: "630-1250 kg",
      speed: "1.5-1.75 m/s",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    },
    // Escalators
    {
      id: 10,
      category: "escalator",
      name: isRTL ? "سلم متحرك تجاري 30°" : "30° Commercial Escalator",
      description: isRTL
        ? "سلم متحرك بميل قياسي لمراكز التسوق والمراكز التجارية. سعة حركة مرور عالية مع ميزات توفير الطاقة."
        : "Standard inclination escalator for shopping malls and commercial centers. High traffic capacity with energy-saving features.",
      features: isRTL
        ? ["سعة حركة مرور عالية", "توفير الطاقة", "مستشعرات السلامة", "إضاءة LED"]
        : ["High Traffic Capacity", "Energy Saving", "Safety Sensors", "LED Lighting"],
      capacity: isRTL ? "9000 شخص/ساعة" : "9000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      category: "escalator",
      name: isRTL ? "سلم متحرك ثقيل 35°" : "35° Heavy Duty Escalator",
      description: isRTL
        ? "ميل أكثر حدة للتركيبات ذات المساحة المحدودة. تصميم متين لمحطات المترو والمطارات."
        : "Steeper inclination for space-constrained installations. Robust design for metro stations and airports.",
      features: isRTL
        ? ["كفاءة المساحة", "شديد التحمل", "مقاوم للطقس", "موثوقية عالية"]
        : ["Space Efficient", "Heavy Duty", "Weather Resistant", "High Reliability"],
      capacity: isRTL ? "9000 شخص/ساعة" : "9000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      category: "escalator",
      name: isRTL ? "ممر متحرك (0° و 12°)" : "Moving Walk (0° & 12°)",
      description: isRTL
        ? "ممرات متحركة أفقية ومائلة للمطارات ومراكز التسوق وقاعات المعارض."
        : "Horizontal and inclined moving walks for airports, shopping centers, and exhibition halls.",
      features: isRTL
        ? ["سفر سلس", "مسافة طويلة", "سعة عالية", "صيانة منخفضة"]
        : ["Smooth Travel", "Long Distance", "High Capacity", "Low Maintenance"],
      capacity: isRTL ? "6000 شخص/ساعة" : "6000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop",
    },
    // Spare Parts
    {
      id: 13,
      category: "parts",
      name: isRTL ? "ماكينات الجر" : "Traction Machines",
      description: isRTL
        ? "ماكينات جر بدون تروس ومع تروس لتطبيقات المصاعد المختلفة. موفرة للطاقة وموثوقة."
        : "Gearless and geared traction machines for various elevator applications. Energy-efficient and reliable.",
      features: isRTL
        ? ["خيارات بدون تروس", "كفاءة عالية", "حجم مدمج", "ضوضاء منخفضة"]
        : ["Gearless Options", "High Efficiency", "Compact Size", "Low Noise"],
      capacity: isRTL ? "متنوعة" : "Various",
      speed: isRTL ? "متنوعة" : "Various",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      id: 14,
      category: "parts",
      name: isRTL ? "مشغلات ووحدات تحكم الأبواب" : "Door Operators & Controllers",
      description: isRTL
        ? "أنظمة أبواب متقدمة بما في ذلك وحدات تحكم أبواب VF والمشغلات ومكونات السلامة."
        : "Advanced door systems including VF door controllers, operators, and safety components.",
      features: isRTL
        ? ["تحكم VVVF", "مستشعرات السلامة", "تشغيل سلس", "علامات تجارية متعددة"]
        : ["VVVF Control", "Safety Sensors", "Smooth Operation", "Multiple Brands"],
      capacity: isRTL ? "متنوعة" : "Various",
      speed: isRTL ? "متنوعة" : "Various",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 15,
      category: "parts",
      name: isRTL ? "لوحات التحكم وبطاقات PCB" : "Control Panels & PCB Boards",
      description: isRTL
        ? "أنظمة تحكم Monarch و VEGA وغيرها من العلامات التجارية. وحدات تحكم متكاملة كاملة وبطاقات احتياطية."
        : "Monarch, VEGA, and other brand control systems. Complete integrated controllers and spare boards.",
      features: isRTL
        ? ["أنظمة متكاملة", "تركيب سهل", "علامات تجارية متعددة", "دعم فني"]
        : ["Integrated Systems", "Easy Installation", "Multiple Brands", "Technical Support"],
      capacity: isRTL ? "متنوعة" : "Various",
      speed: isRTL ? "متنوعة" : "Various",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    },
    {
      id: 16,
      category: "parts",
      name: isRTL ? "العاكسات والمحركات" : "Inverters & Drives",
      description: isRTL
        ? "سلسلة Gefran ADL500 وعاكسات متميزة أخرى لتطبيقات المصاعد. ميزات سلامة متقدمة."
        : "Gefran ADL500 series and other premium inverters for elevator applications. Advanced safety features.",
      features: isRTL
        ? ["تجديد الطاقة", "وظائف السلامة", "إعداد سهل", "مراقبة عن بعد"]
        : ["Energy Regeneration", "Safety Functions", "Easy Setup", "Remote Monitoring"],
      capacity: isRTL ? "متنوعة" : "Various",
      speed: isRTL ? "متنوعة" : "Various",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? elevatorProducts 
    : elevatorProducts.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              {t('elevatorProducts').split(' ')[0]} <span className="text-accent">{t('elevatorProducts').split(' ').slice(1).join(' ') || t('elevators')}</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t('elevatorPageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - Fixed sticky positioning */}
      <section className="py-4 bg-card border-b border-border sticky top-20 md:top-28 z-40">
        <div className="container mx-auto px-4">
          <div className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-xl overflow-hidden shadow-md card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover img-animate group-hover:scale-110"
                  />
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : ''}`}>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className={`flex justify-between items-center text-sm text-muted-foreground border-t border-border pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t('capacity')}: {product.capacity}</span>
                    <span>{t('speed')}: {product.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Accordion */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
              {t('technicalSpecs').split(' ')[0]} <span className="text-accent">{t('technicalSpecs').split(' ').slice(1).join(' ')}</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="passenger" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  {isRTL ? 'مواصفات مصاعد الركاب' : 'Passenger Elevator Specifications'}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>{t('capacity')}:</strong> {isRTL ? '6-21 شخص (450-1600 كجم)' : '6-21 persons (450-1600 kg)'}</p>
                    <p><strong>{t('speed')}:</strong> 1.0-3.0 m/s</p>
                    <p><strong>{isRTL ? 'الدفع' : 'Drive'}:</strong> {isRTL ? 'جر VVVF بدون تروس' : 'VVVF gearless traction'}</p>
                    <p><strong>{isRTL ? 'التحكم' : 'Control'}:</strong> {isRTL ? 'معالج دقيق، إرسال وجهة اختياري' : 'Microprocessor-based, destination dispatch optional'}</p>
                    <p><strong>{isRTL ? 'الباب' : 'Door'}:</strong> {isRTL ? 'فتح مركزي/جانبي، عرض 800-1100 مم' : 'Center/side opening, 800-1100mm width'}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="freight" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  {isRTL ? 'مواصفات مصاعد الشحن' : 'Freight Elevator Specifications'}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>{t('capacity')}:</strong> 1000-5000 kg</p>
                    <p><strong>{t('speed')}:</strong> 0.25-1.0 m/s</p>
                    <p><strong>{isRTL ? 'الدفع' : 'Drive'}:</strong> {isRTL ? 'جر مع/بدون تروس' : 'Geared/gearless traction'}</p>
                    <p><strong>{isRTL ? 'الباب' : 'Door'}:</strong> {isRTL ? 'فتح عمودي ثنائي أو فتح مركزي' : 'Vertical bi-parting or center opening'}</p>
                    <p><strong>{isRTL ? 'الأرضية' : 'Floor'}:</strong> {isRTL ? 'صلب معزز مع لوح مخدد' : 'Reinforced steel with checkered plate'}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="villa" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  {isRTL ? 'مواصفات مصاعد الفيلات' : 'Villa Elevator Specifications'}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>{t('capacity')}:</strong> {isRTL ? '2-4 أشخاص (320-450 كجم)' : '2-4 persons (320-450 kg)'}</p>
                    <p><strong>{t('speed')}:</strong> 0.3-0.6 m/s</p>
                    <p><strong>{isRTL ? 'الدفع' : 'Drive'}:</strong> {isRTL ? 'حزام فولاذي أو هيدروليكي' : 'Steel belt or hydraulic'}</p>
                    <p><strong>{isRTL ? 'عمق الحفرة' : 'Pit Depth'}:</strong> {isRTL ? 'الحد الأدنى 300 مم' : 'Minimum 300mm'}</p>
                    <p><strong>{isRTL ? 'ارتفاع السقف' : 'Headroom'}:</strong> {isRTL ? 'الحد الأدنى 2800 مم' : 'Minimum 2800mm'}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="escalator" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  {isRTL ? 'مواصفات السلالم المتحركة' : 'Escalator Specifications'}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>{isRTL ? 'الميل' : 'Inclination'}:</strong> 30° {isRTL ? 'أو' : 'or'} 35°</p>
                    <p><strong>{t('speed')}:</strong> 0.5 m/s</p>
                    <p><strong>{isRTL ? 'عرض الدرجة' : 'Step Width'}:</strong> 800/1000mm</p>
                    <p><strong>{isRTL ? 'الارتفاع' : 'Rise'}:</strong> {isRTL ? 'حتى 12 م للوحدة' : 'Up to 12m per unit'}</p>
                    <p><strong>{t('capacity')}:</strong> {isRTL ? '6000-9000 شخص/ساعة' : '6000-9000 persons/hour'}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-6">
            {t('needHelpChoosing')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('expertsReady')}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
            <Link to="/contact" className="flex items-center gap-2">
              {t('getExpertConsultation')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Elevators;
