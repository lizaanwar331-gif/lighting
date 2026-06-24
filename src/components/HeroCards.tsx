import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="/icon.png" />
            <AvatarFallback>CV</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Maria Gonzales</CardTitle>
            <CardDescription>Interior Designer</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "CVeez transformed a villa project with warm, efficient LEDs — the
          result exceeded expectations."
        </CardContent>
      </Card>

      {/* Project / Product Card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/icon.png"
              alt="lighting logo"
              className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center">Lighting</CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Energy-efficient products, smart controls, and commercial-grade
          reliability.</p>
        </CardContent>
      </Card>

      {/* Product Highlight */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            LED Panels
            <Badge variant="secondary" className="text-sm text-primary">
              Bestseller
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">High CRI</span>
            <span className="text-muted-foreground"> • 4000K</span>
          </div>

          <CardDescription>
            Slim, efficient panels ideal for offices and retail spaces.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">View Range</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {['Energy Efficient', 'Long Lifespan', 'Commercial Grade'].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Smart Lighting Control</CardTitle>
            <CardDescription className="text-md mt-2">
              Integrations with popular smart home and building management
              systems for centralized control and scheduling.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
