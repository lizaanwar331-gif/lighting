import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LightBulbIcon } from "./Icons";
import productImage from "../assets/lighting.svg";

const productCategories = [
  {
    title: "LED Bulbs",
    description: "Retrofit bulbs engineered for warm home spaces and energy-conscious business lighting.",
  },
  {
    title: "LED Panels",
    description: "Seamless ceiling solutions for offices, retail, and hospitality environments.",
  },
  {
    title: "LED Strip Lights",
    description: "Flexible accent lighting for displays, coves, and architectural highlights.",
  },
  {
    title: "Outdoor Lighting",
    description: "Durable exterior fixtures for walkways, façades, and landscape illumination.",
  },
  {
    title: "Industrial Lighting",
    description: "High-output systems designed for warehouses, manufacturing, and logistics centers.",
  },
  {
    title: "Decorative Lighting",
    description: "Premium fixtures that elevate restaurants, hotels and retail spaces.",
  },
];

export const Services = () => {
  return (
    <section id="products" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-yellow-300">Product</span> Categories
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Explore our premium LED collections built for residential comfort and commercial performance.
          </p>

          <div className="flex flex-col gap-6">
            {productCategories.map((category) => (
              <Card key={category.title} className="bg-secondary/40 border-border">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
                    <LightBulbIcon />
                  </div>
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img src={productImage} className="w-[300px] md:w-[500px] lg:w-[600px] object-contain" alt="Lighting product showcase" />
      </div>
    </section>
  );
};
