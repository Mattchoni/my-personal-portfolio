import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Link } from "react-router-dom";
const projects = [
  {
    slug: "fitquest",
    title: "Fitquest",
    description:
      "Mobile Based Gamified Fitness Application.",
    image: "/projects/Fitquest/Fitquest1.png",
    tags: ["Software Engineering Project", "Figma", "2024"],
    year: "2025",
    role: "UI/UX Designer",
    category: "Mobile Application",
    // caseStudy: "Fitquest is a gamified fitness application designed to make fitness engaging and fun. The app combines game mechanics with fitness tracking to motivate users to achieve their health goals.",
  },
  {
    slug: "moonlight",
    title: "Moonlight",
    description:
      "Mobile Solution for Ensuring Women's Protection at Late Hours.",
    image: "/projects/Moonlight/Moonlight.jpg",
    tags: ["Software Engineering Project", "Figma", "2023"],
    year: "2024",
    role: "Lead Designer",
    category: "Mobile Application",
    // caseStudy: "Moonlight is a safety application designed to protect women during late hours. Features include emergency alerts, location sharing, and panic buttons.",
  },
  {
    slug: "camaligan",
    title: "Treasury System",
    description:
      "LGU Real Property Tax System",
    image: "/projects/Treasury/Camaligan1.png",
    tags: ["OJT", "Figma", "2025"],
    year: "2025",
    role: "Full Stack Developer",
    category: "Web Application",
    // caseStudy: "During my OJT, I developed the Camaligan official website showcasing company services and information.",
  },
  {
    slug: "holotype",
    title: "Holotype",
    description:
      "A virtual keyboard for persons with motor skills difficulties.",
    image: "/projects/Holotype/Holotype1.svg",
    tags: ["Thesis", "Figma", "2025"],
    year: "2025",
    role: "Lead Developer & Researcher",
    category: "Assistive Technology",
    // caseStudy: "My thesis project - a virtual keyboard for people with motor skills difficulties, involving extensive research and user testing.",
  },
];

export const Projects = () => {
  const handleViewAllProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work from complex web and mobile applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <Link
                to={`/project/${project.slug}`}
                aria-label={`View ${project.title} project details`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Mobile/Desktop Click Cue */}
                <div className="absolute top-3 right-3 z-20 pointer-events-none">
                  <div className="p-2.5 rounded-full glass text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-1 md:group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 z-20 pointer-events-none md:hidden">
                  <span className="px-2.5 py-1 rounded-full glass text-[11px] tracking-wide uppercase text-secondary-foreground">
                    Tap to view
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  /> */}

                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={handleViewAllProjects} aria-label="View all projects">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};