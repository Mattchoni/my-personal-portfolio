const allProjects = [
  {
    title: "Architects",
    description: "Practice UI Design.",
    image: "/projects/Architects.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Audiora",
    description: "Practice UI Design.",
    image: "/projects/Audiora.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Aurixa",
    description: "Practice UI Design.",
    image: "/projects/Aurixa.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Buildora",
    description: "Practice UI Design.",
    image: "/projects/Buildora.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Cortex",
    description: "Practice UI Design.",
    image: "/projects/Cortex.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Critic",
    description: "Practice UI Design.",
    image: "/projects/Critic.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "CryoRift",
    description: "Practice UI Design.",
    image: "/projects/CryoRift.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Euphoria",
    description: "Practice UI Design.",
    image: "/projects/Euphoria.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Fuze",
    description: "Practice UI Design.",
    image: "/projects/Fuze.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Giga",
    description: "Practice UI Design.",
    image: "/projects/Giga.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "HR",
    description: "Practice UI Design.",
    image: "/projects/HR.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Jumeno",
    description: "Practice UI Design.",
    image: "/projects/Jumeno.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Lumiere",
    description: "Practice UI Design.",
    image: "/projects/Lumiere.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Music",
    description: "Practice UI Design.",
    image: "/projects/Music.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "Noir",
    description: "Practice UI Design.",
    image: "/projects/Noir.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "RecipeHub",
    description: "Practice UI Design.",
    image: "/projects/RecipeHub.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "RLTY",
    description: "Practice UI Design.",
    image: "/projects/RLTY.png",
    tags: ["Figma", "2025"],
    
  },
    {
    title: "VeloStride",
    description: "Practice UI Design.",
    image: "/projects/VeloStride.png",
    tags: ["Figma", "2025"],
    
  },

];

export const Playground = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden min-h-screen">
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Portfolio Archive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Playground
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Welcome to my playground it's just a bunch of stuff I made, random designs, experiments, and ideas I wanted to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allProjects.map((project, idx) => (
            <article
              key={project.title}
              className="group glass rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/80 border border-border text-[11px] text-foreground">
                  {project.status}
                </div>
              </div>

              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="px-3 py-1 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
