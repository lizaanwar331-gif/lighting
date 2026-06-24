import { Home, Building, ShoppingBag, Sparkles, Globe, Coffee } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Home size={32} />,
    name: "Precision Interiors",
  },
  {
    icon: <Building size={32} />,
    name: "Urban Office Co.",
  },
  {
    icon: <ShoppingBag size={32} />,
    name: "Retail Avenue",
  },
  {
    icon: <Globe size={32} />,
    name: "Hospitality Group",
  },
  {
    icon: <Sparkles size={32} />,
    name: "Design Studio 7",
  },
  {
    icon: <Coffee size={32} />,
    name: "Luna Restaurants",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Trusted by Homeowners, Designers and Businesses
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 text-muted-foreground/80"
          >
            <span className="text-primary">{icon}</span>
            <h3 className="text-base font-semibold text-foreground">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
