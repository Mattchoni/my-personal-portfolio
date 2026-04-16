import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projectsData = [
  {
    slug: "fitquest",
    title: "Fitquest",
    description: "Mobile Based Gamified Fitness Application.",
    image: "/projects/Fitquest.jpg",
    tags: ["Software Engineering Project", "Figma"],
    year: "2025",
    role: "UI/UX Designer",
    category: "Mobile Application",
    caseStudy: "Recognizing the pressing need for prioritizing physical health in today's fast-paced society, FitQuest emerges as a solution to the challenges individuals face in establishing and sustaining a regular fitness routine. Positioned as a mobile-based gamified fitness application, FitQuest not only promotes physical well-being but also injects an element of enjoyment into the pursuit of fitness goals. It aims to revolutionize the way people engage with their health by making the process both interactive and entertaining.",
  },
  {
    slug: "moonlight",
    title: "Moonlight",
    description: "Mobile Solution for Ensuring Women's Protection at Late Hours.",
    image: "/projects/Moonlight.png",
    tags: ["Software Engineering Project", "Figma"],
    year: "2024",
    role: "UI/UX Designer",
    category: "Mobile Application",
    caseStudy: "The Moonlight project is a dedicated effort to address a critical and pressing issue: the safety of women during late-night hours. It is an issue that transcends geographical boundaries, affecting communities both locally and globally. This project aims to provide a comprehensive solution to this problem by leveraging modern technology, social awareness, and community engagement.",
  },
  {
    slug: "camaligan",
    title: "Treasury System",
    description: "LGU Real Property Tax System",
    image: "/projects/Camaligan1.png",
    tags: ["OJT", "Figma"],
    year: "2025",
    role: "UI/UX Designer",
    category: "Web Application",
    caseStudy: "This Real Property Tax System is a web application designed to streamline and enhance the efficiency of property tax management for Local Government Units (LGUs). The system provides a comprehensive platform for managing property tax records, processing payments, and generating reports. It aims to improve the accuracy and accessibility of property tax information while also enhancing the overall user experience for both LGU staff and taxpayers.",
  },
  {
    slug: "holotype",
    title: "Holotype",
    description: "A virtual keyboard for persons with motor skills difficulties.",
    image: "/projects/Holotype.svg",
    tags: ["Thesis", "Figma"],
    year: "2025",
    role: "Lead Developer & Researcher",
    category: "Assistive Technology",
    caseStudy: "This system is created to assist person’s dealing with a condition known as dyspraxia. This offers a special virtual keyboard customized just for them, making activities like typing more manageable. It uses smart technology like computer vision and gestures to understand their hand movements, making typing and other activities smoother. This is designed to be like a special tool that makes typing and learning more enjoyable and accessible for persons with motor coordination difficulties. Addressing motor challenges in person’s, “Holotype: A Virtual Keyboard for Persons with Motor Skills Difficulties” is a special virtual keyboard in development, using smart tech like computer vision and gestures. It aims to make typing and learning easier, providing unique support for persons with difficulties in hand movements.",
  },
];

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:underline flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 animate-fade-in"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-8 animate-fade-in animation-delay-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden mb-12 animate-fade-in animation-delay-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in animation-delay-300">
            <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Year
              </p>
              <p className="text-2xl font-semibold text-secondary-foreground">
                {project.year}
              </p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                My Role
              </p>
              <p className="text-2xl font-semibold text-secondary-foreground">
                {project.role}
              </p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Category
              </p>
              <p className="text-2xl font-semibold text-secondary-foreground">
                {project.category}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 animate-fade-in animation-delay-400">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Case Study Section */}
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in animation-delay-500">
            <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {project.caseStudy}
            </p>
            
            {/* Discussion/Progress Section */}
            {/* <div className="mt-8 pt-8 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
                Key Highlights
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Focused on user experience and accessibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Extensive research and iteration process</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Applied modern design and development practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span></span>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Adjacent Projects Navigation */}
          <div className="mt-16 pt-12 border-t border-border/50 animate-fade-in animation-delay-600">
            <h3 className="text-2xl font-bold mb-8 text-secondary-foreground">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => navigate(`/project/${p.slug}`)}
                    className="glass rounded-xl p-6 text-left hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <h4 className="text-xl font-semibold text-secondary-foreground group-hover:text-primary transition-colors mb-2">
                      {p.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
