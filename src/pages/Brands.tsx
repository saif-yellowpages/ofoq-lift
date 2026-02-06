import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Brands = () => {
  const brands = [
    {
      name: "GENTING",
      description: "Genting Elevator combines 15 years of industry experience with a passion for providing comprehensive elevator spare parts solutions. Their top-of-the-line selection includes parts from all major brands with competitive pricing.",
      specialty: "Complete Elevator Spare Parts & Components",
      products: ["Elevator Control Modernization", "Door Controllers", "PCB Boards", "Inverters", "Encoders", "Safety Parts", "Escalator Parts"],
      logo: "G",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "ELMO",
      description: "ELMO specializes in high-quality elevator components with a focus on innovation and reliability. Their products are designed to meet international safety standards while providing excellent performance.",
      specialty: "Precision Elevator Components",
      products: ["Traction Motors", "Brake Systems", "Guide Rails", "Safety Devices"],
      logo: "E",
      color: "from-green-600 to-green-800",
    },
    {
      name: "FUJI",
      description: "Future FUJI Elevator delivers effective, speedy, and high-end intellectual designs. Their fully computerized intelligent control systems provide passengers with the most efficient vertical transportation experience.",
      specialty: "Complete Elevator Systems",
      products: ["Passenger Elevators", "Machine Roomless Elevators", "Villa Elevators", "Hospital Elevators", "Panoramic Elevators", "Escalators", "Moving Walks"],
      logo: "F",
      color: "from-red-600 to-red-800",
    },
    {
      name: "GEFRAN",
      description: "Gefran's ADL500 inverter series represents the company's commitment to the civil lifting sector. With user-friendliness, reliability, security, and sustainability as primary objectives, Gefran anticipates market needs.",
      specialty: "Elevator Inverters & Drives",
      products: ["ADL510 - Geared Motors", "ADL530 - Universal Control", "ADL550 - Advanced Safety", "ADL550-ICS - Integrated Control System"],
      logo: "Gf",
      color: "from-orange-600 to-orange-800",
    },
    {
      name: "MERTI ELEVATOR",
      description: "MERTI provides comprehensive elevator solutions with a focus on quality and reliability. Their products meet international standards and are suitable for various building types.",
      specialty: "Commercial & Residential Elevators",
      products: ["Commercial Elevators", "Residential Elevators", "Control Systems", "Safety Equipment"],
      logo: "M",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "MONARCH",
      description: "Monarch specializes in integrated elevator control systems. Their NICE series controllers are known for reliability and ease of installation, making them a preferred choice for modernization projects.",
      specialty: "Integrated Control Systems",
      products: ["NICE3000+ Controller", "NICE1000+ Controller", "NICE-D Door Inverter", "MDKE6 Service Tool", "Display Boards", "Interface Boards"],
      logo: "Mo",
      color: "from-indigo-600 to-indigo-800",
    },
    {
      name: "SICOR",
      description: "SICOR manufactures premium elevator components with Italian engineering excellence. Their products are known for precision, durability, and superior performance in demanding applications.",
      specialty: "Italian Precision Components",
      products: ["Traction Machines", "Brake Systems", "Speed Governors", "Safety Gears"],
      logo: "S",
      color: "from-teal-600 to-teal-800",
    },
    {
      name: "VEGA",
      description: "VEGA brings Italian style to lift control systems. The VEG2000 series offers comprehensive programming capabilities with multifunction keypads and advanced fault diagnostics.",
      specialty: "Lift Control Boards",
      products: ["VEG2000 Control Board", "DISP900 Multifunction Keypad", "Programming Interface", "Expansion Cards"],
      logo: "V",
      color: "from-cyan-600 to-cyan-800",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              Our <span className="text-accent">Partner Brands</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We are proud authorized dealers of the world's leading elevator brands. 
              Each brand brings unique expertise and quality to our comprehensive product portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
                <div className={`bg-gradient-to-r ${brand.color} p-6 flex items-center gap-4`}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-2xl">{brand.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-white">{brand.name}</h3>
                    <p className="text-white/80 text-sm">{brand.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">Key Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.products.map((product, pIndex) => (
                        <span 
                          key={pIndex} 
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Brands */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose <span className="text-accent">Our Brands</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our partner brands share a commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Industry Leaders
              </h3>
              <p className="text-muted-foreground">
                Each brand is recognized as a leader in their specialty, with proven track records of excellence.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Certified Quality
              </h3>
              <p className="text-muted-foreground">
                All products meet international standards including EN81, CE marking, and ISO certifications.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Full Support
              </h3>
              <p className="text-muted-foreground">
                We provide complete technical support, spare parts availability, and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-6">
            Ready to Explore Our Products?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            View our complete range of elevators and components from these premium brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
              <Link to="/elevators">
                View Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;
