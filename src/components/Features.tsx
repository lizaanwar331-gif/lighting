import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  { title: "Energy Efficient", description: "High-performance LED systems that cut energy use without sacrificing brightness." },
  { title: "Long Lifespan", description: "Durable lighting solutions rated for up to 50,000 hours of maintenance-free operation." },
  { title: "Smart Lighting Control", description: "Seamless app, voice, and automation control for scenes, schedules, and occupancy." },
  { title: "Modern Design", description: "Refined fixtures and profiles created for contemporary homes and premium commercial spaces." },
  { title: "Commercial Solutions", description: "Scalable systems for retail, hospitality, offices, and industrial workplaces." },
  { title: "Eco-Friendly Technology", description: "Low-wattage LEDs built with recyclable materials and responsible manufacturing standards." },
];

const featureList: string[] = [
  "Energy Efficient",
  "Long Lifespan",
  "Smart Lighting Control",
  "Modern Design",
  "Commercial Solutions",
  "Eco-Friendly Technology",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Designed for premium comfort,
        <br />
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          performance and efficiency.
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm tracking-wide text-foreground/90">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title} className="bg-secondary/40 border-border">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
