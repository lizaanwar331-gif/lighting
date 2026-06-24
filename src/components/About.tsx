import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-secondary/30 border border-border rounded-3xl py-12 px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Leading Projects Choose Lighting
        </h2>

        <p className="text-xl text-muted-foreground mt-2 mb-8">
          Lighting delivers premium LED systems designed for energy savings,
          modern aesthetics and long-term reliability across residential and
          commercial environments.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            "Premium Quality",
            "Competitive Pricing",
            "Fast Delivery",
            "Professional Support",
            "Custom Lighting Solutions",
            "Warranty Coverage",
          ].map((item) => (
            <div key={item} className="bg-background/10 rounded-3xl p-6 shadow-lg shadow-black/10">
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>

        <Statistics />
      </div>
    </section>
  );
};
