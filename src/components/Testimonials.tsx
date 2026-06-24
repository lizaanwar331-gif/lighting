import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/icon.png",
    name: "Angela Reed",
    userName: "Homeowner",
    comment:
      "CVeez transformed our living spaces with balanced warmth and energy savings. The installation was seamless.",
  },
  {
    image: "/icon.png",
    name: "Mark Stevens",
    userName: "Electrical Contractor",
    comment:
      "The product quality and support made our hotel retrofit efficient and reliable. We’ll use CVeez again.",
  },
  {
    image: "/icon.png",
    name: "Priya Kapoor",
    userName: "Interior Designer",
    comment:
      "Their decorative and accent lighting gave our restaurant project a truly premium ambience.",
  },
  {
    image: "/icon.png",
    name: "Liu Wei",
    userName: "Facilities Manager",
    comment:
      "Commercial panels reduced maintenance and delivered consistent light across our warehouse floor.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Real Lighting Results from
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          trusted customers
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Feedback from homeowners, designers and businesses who chose Lighting for smarter LED performance.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card key={name} className="border-border bg-secondary/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={name} src={image} />
                  <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
