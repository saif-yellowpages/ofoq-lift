import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Shield, Star, Handshake, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We open new horizons of innovation for our clients in the world of vertical solutions, where smart technology meets expert engineering.",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "We aim to elevate safety standards in every project we undertake, ensuring the highest levels of protection and compliance.",
    },
    {
      icon: Star,
      title: "Excellence & Quality",
      description: "We are committed to the highest standards of quality in every installation, maintenance, and service we deliver.",
    },
    {
      icon: Handshake,
      title: "Partnership & Professionalism",
      description: "We build lasting partnerships with our clients and brands, grounded in professionalism, trust, and mutual success.",
    },
    {
      icon: Zap,
      title: "Proactiveness",
      description: "We anticipate our clients' needs and stay ahead of industry trends, delivering forward-thinking solutions.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-heading font-semibold text-lg mb-3">New Horizons for Every Ascent</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              About <span className="text-accent">Ofoq Elevators</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              At Ofoq Elevators, we don't just transport you between floors — we aim to elevate safety and quality 
              standards in every project we undertake. We open a new horizon of innovation for our clients in the 
              world of vertical solutions, where smart technology meets expert engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Who We <span className="text-accent">Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ofoq Elevators is a leading provider of integrated and intelligent engineering solutions 
                  for the supply, installation, and maintenance of elevators and escalators in Saudi Arabia.
                </p>
                <p>
                  We combine human expertise with the latest global technologies, ensuring the highest levels 
                  of safety and quality that meet our clients' aspirations and guarantee their comfort. Our team 
                  of experienced engineers and technicians ensures that every project — whether a residential villa 
                  or a commercial high-rise — receives the attention and expertise it deserves.
                </p>
                <p>
                  As authorized dealers of international brands including GENTING, FUJI, MONARCH, GEFRAN, VEGA, 
                  and more, we deliver comprehensive vertical transportation solutions across the Kingdom.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop"
                  alt="Modern building facade"
                  className="w-full h-full object-cover img-animate"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-xl shadow-gold hidden lg:block">
                <div className="font-heading font-bold text-4xl text-accent-foreground">15+</div>
                <div className="text-accent-foreground/90 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the first and most inspiring choice in the vertical solutions sector, setting new 
                standards of luxury and safety that go beyond simple transportation, opening unlimited 
                horizons in the modern construction world.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide integrated and intelligent engineering solutions for the supply, installation, 
                and maintenance of elevators and escalators by combining human expertise with the latest 
                global technologies, ensuring the highest levels of safety and quality that meet our 
                clients' aspirations and guarantee their comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Ofoq Elevators.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-md card-hover text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-bold text-4xl text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl text-accent mb-2">8</div>
              <div className="text-primary-foreground/80">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-4xl text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help elevate your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/elevators">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
