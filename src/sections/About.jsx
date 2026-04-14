import { Palette, Lightbulb, Sparkles, Users } from "lucide-react";

const highlights = [
  {
  icon: Palette,
  title: "Visual Design",
  description:
    "Crafting clean, modern interfaces that are both beautiful and functional.",
  },
  {
    icon: Sparkles,
    title: "User Experience",
    description:
      "Designing intuitive journeys that feel seamless and effortless to use.",
  },
  {
    icon: Users,
    title: "User-Centered",
    description:
      "Putting users at the core of every decision to create meaningful experiences.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Exploring ideas and trends to deliver innovative and engaging designs.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing meaningful experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one interface at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-justify animate-fade-in animation-delay-200">
              <p>
                I specialize in creating clean, functional, and aesthetically pleasing interfaces from landing pages to full scale web and mobile applications. My approach combines thoughtful design, usability, and attention to detail to deliver seamless user experiences.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new technologies,
                developing Roblox games, watching anime, or playing video games. 
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in text-justify animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to craft intuitive and engaging user experiences that balance usability and aesthetics designs users love and interactions that feel natural."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};