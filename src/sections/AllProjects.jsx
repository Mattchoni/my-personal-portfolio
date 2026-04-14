const allProjects = [
  {
    title: "Fitquest",
    description: "Mobile Based Gamified Fitness Application.",
    image: "/projects/Fitquest.jpg",
    tags: ["Software Engineering Project", "Figma"],
    status: "Completed",
  },
  {
    title: "Moonlight",
    description: "Mobile Solution for Ensuring Women’s Protection at Late Hours.",
    image: "/projects/Moonlight.jpg",
    tags: ["Software Engineering Project", "Figma"],
    status: "Completed",
  },
  {
    title: "Camaligan",
    description: "Camaligan Official Website.",
    image: "/projects/Camaligan.svg",
    tags: ["OJT", "Figma"],
    status: "Completed",
  },
  {
    title: "Holotype",
    description: "A virtual keyboard for persons with motor skills difficulties.",
    image: "/projects/Holotype.svg",
    tags: ["Thesis", "Figma"],
    status: "Completed",
  },
    {
    title: "Architects",
    description: "Practice UI Design.",
    image: "/projects/Architects.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Audiora",
    description: "Practice UI Design.",
    image: "/projects/Audiora.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Aurixa",
    description: "Practice UI Design.",
    image: "/projects/Aurixa.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Buildora",
    description: "Practice UI Design.",
    image: "/projects/Buildora.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Cortex",
    description: "Practice UI Design.",
    image: "/projects/Cortex.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Critic",
    description: "Practice UI Design.",
    image: "/projects/Critic.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "CryoRift",
    description: "Practice UI Design.",
    image: "/projects/CryoRift.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Euphoria",
    description: "Practice UI Design.",
    image: "/projects/Euphoria.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Fuze",
    description: "Practice UI Design.",
    image: "/projects/Fuze.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Giga",
    description: "Practice UI Design.",
    image: "/projects/Giga.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "HR",
    description: "Practice UI Design.",
    image: "/projects/HR.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Jumeno",
    description: "Practice UI Design.",
    image: "/projects/Jumeno.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Lumiere",
    description: "Practice UI Design.",
    image: "/projects/Lumiere.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Music",
    description: "Practice UI Design.",
    image: "/projects/Music.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "Noir",
    description: "Practice UI Design.",
    image: "/projects/Noir.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "RecipeHub",
    description: "Practice UI Design.",
    image: "/projects/RecipeHub.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "RLTY",
    description: "Practice UI Design.",
    image: "/projects/RLTY.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },
    {
    title: "VeloStride",
    description: "Practice UI Design.",
    image: "/projects/VeloStride.png",
    tags: ["Figma", "2025"],
    status: "Completed",
  },

];

export const AllProjects = () => {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden min-h-screen">
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Portfolio Archive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            All Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A complete look at the projects I have shipped and designed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <article
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/80 border border-border text-xs text-foreground">
                  {project.status}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
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
