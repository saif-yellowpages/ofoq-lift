import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award, Users, Building2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-elevator.jpg";

const Home = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('safetyFirst'),
      description: t('safetyDescription'),
    },
    {
      icon: Zap,
      title: t('energyEfficient'),
      description: t('energyDescription'),
    },
    {
      icon: Award,
      title: t('premiumBrandsTitle'),
      description: t('premiumBrandsDescription'),
    },
  ];

  const stats = [
    { value: "500+", label: t('projectsCompleted') },
    { value: "15+", label: t('yearsExperience') },
    { value: "8", label: t('premiumBrands') },
    { value: "24/7", label: t('supportAvailable') },
  ];

  const services = [
    {
      icon: Building2,
      title: t('installation'),
      description: t('installationDescription'),
    },
    {
      icon: Wrench,
      title: t('maintenance'),
      description: t('maintenanceDescription'),
    },
    {
      icon: Users,
      title: t('consultation'),
      description: t('consultationDescription'),
    },
  ];

  const productCategories = [
    {
      title: t('passengerElevators'),
      description: t('passengerDescription'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: t('panoramicElevators'),
      description: t('panoramicDescription'),
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
    },
    {
      title: t('freightElevators'),
      description: t('freightDescription'),
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center img-fade-in"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-fade-in">
              {t('heroTitle')}{" "}
              <span className="text-gradient-gold">{t('heroTitleHighlight')}</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t('heroDescription')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 animate-fade-in ${isRTL ? 'sm:flex-row-reverse sm:justify-end' : ''}`} style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
                <Link to="/elevators" className="flex items-center gap-2">
                  {t('exploreProducts')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/contact">{t('contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              {t('whyChooseUs')} <span className="text-accent">{t('whyChooseUsHighlight')}</span>؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('whyChooseDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              <span className="text-accent">{t('ourProducts')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('productsDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover img-animate group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Link
                    to="/elevators"
                    className="inline-flex items-center text-accent font-medium hover:underline"
                  >
                    {t('learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold">
              <Link to="/elevators" className="flex items-center gap-2">
                {t('viewAllProducts')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={isRTL ? 'lg:col-start-2' : ''}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                {t('completeServices')} <span className="text-accent">{t('completeServicesHighlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('servicesDescription')}
              </p>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                  alt="Modern building with elevators"
                  className="w-full h-full object-cover img-animate img-float"
                />
              </div>
              <div className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} bg-accent p-6 rounded-xl shadow-gold`}>
                <div className="font-heading font-bold text-3xl text-accent-foreground">15+</div>
                <div className="text-accent-foreground/90 font-medium">{t('yearsOfExcellence')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            {t('readyToElevate')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
              <Link to="/contact">{t('getFreeQuote')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
              <a href="tel:+966501080031">{t('callNow')}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
