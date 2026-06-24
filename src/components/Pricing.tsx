import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Project Consultation",
    popular: 0,
    price: 0,
    description: "Start with a free project review and lighting specification session.",
    buttonText: "Book Consultation",
    benefitList: [
      "Lighting needs assessment",
      "Initial fixture recommendations",
      "Budget-friendly options",
      "Delivery timeline overview",
      "Expert support",
    ],
  },
  {
    title: "Design & Supply",
    popular: 1,
    price: 0,
    description: "Complete design support with premium LED fixtures for homes and businesses.",
    buttonText: "Request Quote",
    benefitList: [
      "Custom lighting layouts",
      "Premium product selection",
      "Smart control integration",
      "Fast delivery",
      "Warranty coverage",
    ],
  },
  {
    title: "Commercial Projects",
    popular: 0,
    price: 0,
    description: "Scalable solution packages for offices, hotels, retail and industrial sites.",
    buttonText: "Contact Sales",
    benefitList: [
      "Bulk pricing",
      "Site-ready specifications",
      "Dedicated account manager",
      "Ongoing maintenance support",
      "Extended warranty options",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        LED Solutions Built for Every Project
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the right service package for residential, hospitality, retail, and industrial needs.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{' '}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
