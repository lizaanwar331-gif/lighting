import React from "react";

export const Projects = () => {
  const projects = [
    "Villas",
    "Offices",
    "Hotels",
    "Restaurants",
    "Retail Stores",
    "Warehouses",
  ];

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>

      <p className="text-muted-foreground mb-8">
        Recent installations showcasing Lighting across different sectors.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p} className="bg-muted/40 rounded p-6">
            <h3 className="font-semibold text-xl">{p}</h3>
            <p className="text-sm text-muted-foreground mt-2">Showcase of recent
            {` `}{p.toLowerCase()} lighting installations, highlighting design and
            efficiency.</p>
          </div>
        ))}
      </div>
    </section>
  );
};
