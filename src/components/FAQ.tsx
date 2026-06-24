import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you offer commercial warranties on products?",
    answer:
      "Yes — we provide manufacturer warranties and optional extended coverage for commercial projects.",
    value: "item-1",
  },
  {
    question: "Can your LEDs be integrated with smart home systems?",
    answer:
      "Many of our products support popular smart platforms and DMX/BMS integrations for commercial sites.",
    value: "item-2",
  },
  {
    question: "What is the expected lifespan of your fixtures?",
    answer: "Most products are rated 30,000–50,000 hours depending on model and usage.",
    value: "item-3",
  },
  {
    question: "Do you provide custom lighting design services?",
    answer:
      "Yes — we offer design, photometric planning and custom fixture options for large projects.",
    value: "item-4",
  },
  {
    question: "What are your lead times for bulk orders?",
    answer:
      "Typical lead times range from 1–4 weeks depending on product and order size; expedited options are available.",
    value: "item-5",
  },
  {
    question: "Are your products energy certified?",
    answer: "Yes — many items are ENERGY STAR and CE certified; specifications are available per product.",
    value: "item-6",
  },
  {
    question: "Do you offer on-site installation or contractor referrals?",
    answer:
      "We partner with certified installers and can recommend local contractors for your project.",
    value: "item-7",
  },
  {
    question: "How do I request a quote for my project?",
    answer:
      "Use the 'Request a Quote' button or contact our sales team via phone or WhatsApp with project details.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
