import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We partner only with world-leading brands and ensure every installation meets the highest standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients' success is our success. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "From on-time delivery to responsive service, we are a partner you can depend on.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Company founded in Riyadh" },
    { year: "2012", event: "First major commercial project completed" },
    { year: "2015", event: "Expanded product portfolio with international brands" },
    { year: "2018", event: "100+ installations milestone achieved" },
    { year: "2021", event: "Launched 24/7 maintenance service" },
    { year: "2024", event: "500+ successful projects completed" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              About <span className="text-accent">Ofoq Lift</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your trusted partner for premium elevator solutions in the Kingdom of Saudi Arabia. 
              With over 15 years of experience, we've been elevating buildings and businesses across the region.
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
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in Riyadh, Ofoq Lift has grown from a small elevator service company to one of 
                  the leading elevator solution providers in Saudi Arabia. Our journey began with a simple 
                  mission: to bring world-class vertical transportation solutions to the Kingdom.
                </p>
                <p>
                  Today, we are proud authorized dealers of international brands including GENTING, FUJI, 
                  MONARCH, GEFRAN, VEGA, and more. Our comprehensive portfolio includes passenger elevators, 
                  freight elevators, hospital elevators, panoramic elevators, escalators, and a complete 
                  range of spare parts and components.
                </p>
                <p>
                  Our team of experienced engineers and technicians ensures that every project—whether a 
                  residential villa or a commercial high-rise—receives the attention and expertise it deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop"
                  alt="Modern building facade"
                  className="w-full h-full object-cover"
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

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and innovative vertical transportation solutions that enhance 
                the functionality and value of buildings across Saudi Arabia. We are committed to 
                exceptional service, technical excellence, and customer satisfaction in every project we undertake.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred elevator solutions provider in the Middle East, 
                recognized for our commitment to quality, innovation, and sustainable practices. We aim 
                to elevate not just buildings, but the standards of our entire industry.
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
              These principles guide everything we do at Ofoq Lift.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-heading font-bold text-accent-foreground text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="bg-card p-6 rounded-xl shadow-sm flex-1 mt-2">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
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
