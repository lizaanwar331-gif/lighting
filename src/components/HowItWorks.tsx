import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface ProcessStepProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const processSteps: ProcessStepProps[] = [
  {
    icon: <MapIcon />,
    title: "Consultation",
    description: "We review your space, goals and application to specify the ideal LED solution.",
  },
  {
    icon: <MedalIcon />,
    title: "Design",
    description: "Our team creates lighting plans and custom fixture options for every project.",
  },
  {
    icon: <PlaneIcon />,
    title: "Delivery",
    description: "Fast fulfillment with quality packaging and reliable logistics for every order.",
  },
  {
    icon: <GiftIcon />,
    title: "Support",
    description: "Ongoing service, technical support and warranty assistance for peace of mind.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        The Lighting Process
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        From design and specification through delivery and support, our team simplifies every step for residential and commercial projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map(({ icon, title, description }: ProcessStepProps) => (
          <Card
            key={title}
            className="bg-secondary/40 border-border"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
