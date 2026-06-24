import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-[#111316] border border-border py-16 my-24 sm:my-32 rounded-3xl"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Take the first step toward
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              smarter LED design.
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Lighting combines premium fixtures, intelligent controls and expert support to deliver projects on time, on budget and with outstanding results.
          </p>
        </div>

        <div className="space-y-4">
          <Button className="w-full sm:w-auto">Request a Quote</Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
