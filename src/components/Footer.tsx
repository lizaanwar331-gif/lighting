import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-auto">
          <a rel="noreferrer noopener" href="/" className="font-bold text-xl flex items-center gap-2">
            <LogoIcon /> Lighting
          </a>

          <p className="mt-4 text-muted-foreground">
            Premium LED lighting solutions designed for homes, offices and commercial spaces.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>
          <a href="#products" className="opacity-60 hover:opacity-100">Products</a>
          <a href="#projects" className="opacity-60 hover:opacity-100">Projects</a>
          <a href="#about" className="opacity-60 hover:opacity-100">About Us</a>
          <a href="#contact" className="opacity-60 hover:opacity-100">Contact</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <a href="#faq" className="opacity-60 hover:opacity-100">FAQ</a>
          <a href="#" className="opacity-60 hover:opacity-100">Warranty</a>
          <a href="#" className="opacity-60 hover:opacity-100">Privacy Policy</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div className="opacity-60">Phone: +1 (555) 123-4567</div>
          <div className="opacity-60">WhatsApp: +1 (555) 987-6543</div>
          <div className="opacity-60">Email: sales@cveezlighting.com</div>
          <div className="opacity-60">Address: 1424 Lumina Avenue, San Francisco, CA</div>
        </div>
      </section>

      <section className="container pb-14 text-center text-muted-foreground">
        <h3>&copy; {new Date().getFullYear()} Lighting — All rights reserved.</h3>
      </section>
    </footer>
  );
};
