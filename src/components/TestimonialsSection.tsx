import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "VP Productions transformed our brand story into a compelling visual narrative. Their creative direction and technical execution exceeded our expectations and delivered real results for our marketing campaign.",
    author: "Sarah Johnson",
    position: "Marketing Director at Elevate Architecture",
    project: "Brand Film"
  },
  {
    quote: "Working with VP Productions on our music video was an incredible experience. They captured the essence of our sound and translated it into stunning visuals that resonated with our audience and elevated our artistic profile.",
    author: "Marcus Chen",
    position: "Lead Singer, Luminance",
    project: "Music Video"
  },
  {
    quote: "The documentary VP Productions created for our non-profit brought our mission to life in ways we never imagined. Their sensitivity and storytelling expertise resulted in a powerful film that has significantly increased our donor engagement.",
    author: "Elena Rodriguez",
    position: "Executive Director, Global Impact Foundation",
    project: "Documentary"
  },
  {
    quote: "Our product launch video delivered exactly what we needed - a perfect balance of technical information and emotional appeal. The team's attention to detail and commitment to quality was evident in every frame.",
    author: "David Williams",
    position: "Product Director, Chrono Technologies",
    project: "Commercial"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30 -mt-16 md:-mt-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-md md:shadow-lg p-6 md:p-8"
        >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-lg text-foreground/80">
            Our clients' success stories speak volumes about our commitment to excellence and creative vision.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-1">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
                
                <p className="text-lg text-foreground/90 my-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-background rounded-lg border border-border">
            <span className="text-sm text-muted-foreground">Trusted by companies and artists worldwide</span>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;