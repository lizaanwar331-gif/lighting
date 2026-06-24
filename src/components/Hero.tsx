import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-5xl font-bold text-white">
          <h1 className="leading-tight">
            Illuminate Every Space with
            <br />
            <span className="text-yellow-300">Smart LED Lighting</span>
          </h1>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Premium LED solutions for homes, offices, retail stores, and industrial
          facilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact">
            <Button className="w-full sm:w-auto">Request a Quote</Button>
          </a>

          <a href="#products">
            <Button variant="secondary" className="w-full sm:w-auto">
              View Products
            </Button>
          </a>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
