import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Elevators = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "passenger", name: "Passenger Elevators" },
    { id: "freight", name: "Freight Elevators" },
    { id: "hospital", name: "Hospital Elevators" },
    { id: "villa", name: "Villa Elevators" },
    { id: "panoramic", name: "Panoramic Elevators" },
    { id: "escalator", name: "Escalators & Moving Walks" },
    { id: "parts", name: "Spare Parts" },
  ];

  const elevatorProducts = [
    // Passenger Elevators
    {
      id: 1,
      category: "passenger",
      name: "Machine Roomless Passenger Elevator",
      description: "Modern MRL elevator with gearless traction technology. Saves building space with compact design while delivering smooth, energy-efficient operation.",
      features: ["Gearless Traction", "Energy Efficient", "Space Saving", "Low Noise (50dB)"],
      capacity: "450-1600 kg",
      speed: "1.0-2.0 m/s",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "passenger",
      name: "Small Machine Room Passenger Elevator",
      description: "Compact machine room design with permanent magnet synchronous motor. Perfect for buildings with limited machine room space.",
      features: ["Compact Design", "High Efficiency", "Smooth Ride", "VFD Control"],
      capacity: "450-1000 kg",
      speed: "1.0-1.75 m/s",
      image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=400&h=300&fit=crop",
    },
    // Freight Elevators
    {
      id: 3,
      category: "freight",
      name: "Machine Roomless Freight Elevator",
      description: "Heavy-duty freight elevator designed for industrial applications. Robust construction with reinforced car and durable components.",
      features: ["Heavy Load Capacity", "Reinforced Structure", "Precise Leveling", "Durable Design"],
      capacity: "1000-5000 kg",
      speed: "0.25-1.0 m/s",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "freight",
      name: "Automobile Elevator",
      description: "Specialized elevator for vertical automobile transport. Ideal for car showrooms, parking facilities, and service centers.",
      features: ["Large Capacity", "Wide Doors", "Heavy Duty Floor", "Safe Operation"],
      capacity: "2000-5000 kg",
      speed: "0.25-0.5 m/s",
      image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=400&h=300&fit=crop",
    },
    // Hospital Elevators
    {
      id: 5,
      category: "hospital",
      name: "Hospital Bed Elevator",
      description: "Designed with patient comfort in mind. Features extended door opening time, smooth operation, and antibacterial interiors.",
      features: ["Smooth Operation", "Extended Door Time", "Antibacterial Interior", "Emergency Features"],
      capacity: "1600-2000 kg",
      speed: "1.0-2.0 m/s",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    },
    // Villa Elevators
    {
      id: 6,
      category: "villa",
      name: "Villa Home Elevator",
      description: "Elegant home elevator with customizable interiors. Perfect for residential villas with luxurious design options.",
      features: ["Customizable Design", "Quiet Operation", "Compact Footprint", "Premium Finishes"],
      capacity: "320-450 kg",
      speed: "0.4-0.6 m/s",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      category: "villa",
      name: "Steel Band Villa Elevator",
      description: "Innovative steel belt technology for smooth, quiet operation. Modular steel structure for easy installation.",
      features: ["Steel Belt Drive", "Modular Structure", "Glass Enclosure", "Quick Installation"],
      capacity: "320-630 kg",
      speed: "0.4-1.0 m/s",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
    // Panoramic Elevators
    {
      id: 8,
      category: "panoramic",
      name: "Semicircle Observation Elevator",
      description: "Stunning panoramic views with semicircular glass design. Perfect for shopping malls and architectural landmarks.",
      features: ["Tempered Glass", "360° Views", "LED Lighting", "Elegant Design"],
      capacity: "630-1600 kg",
      speed: "1.0-1.75 m/s",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      category: "panoramic",
      name: "Square Observation Elevator",
      description: "Contemporary square design observation elevator. Combines safety with stunning architectural aesthetics.",
      features: ["Laminated Glass", "Customizable Design", "Safety Features", "Modern Aesthetics"],
      capacity: "630-1250 kg",
      speed: "1.5-1.75 m/s",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    },
    // Escalators
    {
      id: 10,
      category: "escalator",
      name: "30° Commercial Escalator",
      description: "Standard inclination escalator for shopping malls and commercial centers. High traffic capacity with energy-saving features.",
      features: ["High Traffic Capacity", "Energy Saving", "Safety Sensors", "LED Lighting"],
      capacity: "9000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      category: "escalator",
      name: "35° Heavy Duty Escalator",
      description: "Steeper inclination for space-constrained installations. Robust design for metro stations and airports.",
      features: ["Space Efficient", "Heavy Duty", "Weather Resistant", "High Reliability"],
      capacity: "9000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      category: "escalator",
      name: "Moving Walk (0° & 12°)",
      description: "Horizontal and inclined moving walks for airports, shopping centers, and exhibition halls.",
      features: ["Smooth Travel", "Long Distance", "High Capacity", "Low Maintenance"],
      capacity: "6000 persons/hour",
      speed: "0.5 m/s",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop",
    },
    // Spare Parts
    {
      id: 13,
      category: "parts",
      name: "Traction Machines",
      description: "Gearless and geared traction machines for various elevator applications. Energy-efficient and reliable.",
      features: ["Gearless Options", "High Efficiency", "Compact Size", "Low Noise"],
      capacity: "Various",
      speed: "Various",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      id: 14,
      category: "parts",
      name: "Door Operators & Controllers",
      description: "Advanced door systems including VF door controllers, operators, and safety components.",
      features: ["VVVF Control", "Safety Sensors", "Smooth Operation", "Multiple Brands"],
      capacity: "Various",
      speed: "Various",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 15,
      category: "parts",
      name: "Control Panels & PCB Boards",
      description: "Monarch, VEGA, and other brand control systems. Complete integrated controllers and spare boards.",
      features: ["Integrated Systems", "Easy Installation", "Multiple Brands", "Technical Support"],
      capacity: "Various",
      speed: "Various",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    },
    {
      id: 16,
      category: "parts",
      name: "Inverters & Drives",
      description: "Gefran ADL500 series and other premium inverters for elevator applications. Advanced safety features.",
      features: ["Energy Regeneration", "Safety Functions", "Easy Setup", "Remote Monitoring"],
      capacity: "Various",
      speed: "Various",
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
              Elevator <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Explore our comprehensive range of elevator and escalator solutions. 
              From residential villas to commercial high-rises, we have the perfect solution for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-32 md:top-36 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-border pt-4">
                    <span>Capacity: {product.capacity}</span>
                    <span>Speed: {product.speed}</span>
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
              Technical <span className="text-accent">Specifications</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="passenger" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  Passenger Elevator Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Capacity:</strong> 6-21 persons (450-1600 kg)</p>
                    <p><strong>Speed:</strong> 1.0-3.0 m/s</p>
                    <p><strong>Drive:</strong> VVVF gearless traction</p>
                    <p><strong>Control:</strong> Microprocessor-based, destination dispatch optional</p>
                    <p><strong>Door:</strong> Center/side opening, 800-1100mm width</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="freight" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  Freight Elevator Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Capacity:</strong> 1000-5000 kg</p>
                    <p><strong>Speed:</strong> 0.25-1.0 m/s</p>
                    <p><strong>Drive:</strong> Geared/gearless traction</p>
                    <p><strong>Door:</strong> Vertical bi-parting or center opening</p>
                    <p><strong>Floor:</strong> Reinforced steel with checkered plate</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="villa" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  Villa Elevator Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Capacity:</strong> 2-4 persons (320-450 kg)</p>
                    <p><strong>Speed:</strong> 0.3-0.6 m/s</p>
                    <p><strong>Drive:</strong> Steel belt or hydraulic</p>
                    <p><strong>Pit Depth:</strong> Minimum 300mm</p>
                    <p><strong>Headroom:</strong> Minimum 2800mm</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="escalator" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-lg">
                  Escalator Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Inclination:</strong> 30° or 35°</p>
                    <p><strong>Speed:</strong> 0.5 m/s</p>
                    <p><strong>Step Width:</strong> 800/1000mm</p>
                    <p><strong>Rise:</strong> Up to 12m per unit</p>
                    <p><strong>Capacity:</strong> 6000-9000 persons/hour</p>
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
            Need Help Choosing the Right Elevator?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you select the perfect elevator solution for your project.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold">
            <Link to="/contact">
              Get Expert Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Elevators;
