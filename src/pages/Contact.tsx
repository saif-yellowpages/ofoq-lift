import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: isRTL ? t('visitUs') : "Visit Us",
      details: isRTL ? ["الرياض ، المهديه"] : ["Al Mahdiyah, Riyadh"],
    },
    {
      icon: Phone,
      title: isRTL ? t('callUs') : "Call Us",
      details: ["+966 50 108 0031"],
      link: "tel:+966501080031",
    },
    {
      icon: Mail,
      title: isRTL ? t('emailUs') : "Email Us",
      details: ["info@ofoqlift.com"],
      link: "mailto:info@ofoqlift.com",
    },
    {
      icon: Clock,
      title: isRTL ? t('workingHours') : "Working Hours",
      details: isRTL
        ? [t('workingHoursDetails1'), t('workingHoursDetails2')]
        : ["Sun - Thu: 8:00 AM - 6:00 PM", "Fri - Sat: Closed"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className={`font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? t('contact') : 'Contact'} <span className="text-accent">{isRTL ? t('contactHighlight') : 'Us'}</span>
            </h1>
            <p className={`text-xl text-primary-foreground/90 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('contactDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className={`font-heading font-bold text-2xl text-foreground mb-8 ${isRTL ? 'text-right' : ''}`}>
                {isRTL ? t('getInTouch') : <>Get in <span className="text-accent">Touch</span></>}
              </h2>
              <div className="space-y-6">
              {contactInfo.map((item, index) => (
                  <div key={index} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, dIndex) => (
                        item.link ? (
                          <a 
                            key={dIndex}
                            href={item.link}
                            className="block text-muted-foreground hover:text-accent transition-colors"
                            dir={item.icon === Phone ? 'ltr' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={dIndex} className="text-muted-foreground">{detail}</p>
                        )
                      ))}
                    </div>
                    {item.icon === Mail && (
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=24.6675324,46.5350462"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-center"
                      >
                        <Button size="sm" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold gap-1">
                          <Navigation className="w-4 h-4" />
                          {isRTL ? 'الاتجاهات' : 'Get Directions'}
                        </Button>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video bg-secondary rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.5!2d46.5350462!3d24.6675324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQwJzAzLjEiTiA0NsKwMzInMDYuMiJF!5e0!3m2!1sen!2s!4v1709639940034!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ofoq Lift Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                  Send Us a <span className="text-accent">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                What areas do you service?
              </h3>
              <p className="text-muted-foreground">
                We provide elevator solutions throughout the Kingdom of Saudi Arabia, with our 
                main office located in Riyadh.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Do you offer maintenance services?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive maintenance packages including 24/7 emergency support, 
                regular inspections, and preventive maintenance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                How long does installation take?
              </h3>
              <p className="text-muted-foreground">
                Installation time varies by project size, typically ranging from 2-4 weeks for 
                residential elevators to 8-12 weeks for commercial projects.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Do you provide spare parts?
              </h3>
              <p className="text-muted-foreground">
                Yes, we stock a comprehensive range of spare parts from all our partner brands, 
                ensuring quick availability for repairs and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
