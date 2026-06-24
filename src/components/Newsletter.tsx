import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission placeholder
    console.log("Contact request sent");
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-4">Get in touch with Lighting</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Start your next LED lighting project with a free consultation and quote.
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div>
                <strong>WhatsApp:</strong> +1 (555) 987-6543
              </div>
              <div>
                <strong>Email:</strong> sales@cveezlighting.com
              </div>
              <div>
                <strong>Address:</strong> 1424 Lumina Avenue, Suite 200, San Francisco, CA
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-secondary/30 rounded-3xl p-8 border border-border">
            <Input placeholder="Your name" aria-label="name" />
            <Input placeholder="Email address" aria-label="email" />
            <Input placeholder="Phone or WhatsApp" aria-label="contact" />
            <Input placeholder="Project type or question" aria-label="project details" />
            <Button type="submit" className="w-full">
              Request a Quote
            </Button>
          </form>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
