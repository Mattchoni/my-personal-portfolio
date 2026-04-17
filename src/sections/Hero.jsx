import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  MessageCircle,
  AtSign,
  Download,
  ThumbsUp,
  Mail,
  Eye
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Figma",
  "Framer",
  "Html",
  "Node.js",
  "Python",
  "Balsamiq",
  "Tailwind",
  "Vercel",
];

export const Hero = () => {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    const VIEWS_NAMESPACE = "john-matthew-lirio-portfolio";
    const hostKey = window.location.hostname
      .replace(/[^a-zA-Z0-9-]/g, "-")
      .toLowerCase();
    const VIEWS_KEY = `${hostKey}-views`;
    const STORAGE_KEY = "portfolio:last-view-hit";
    const COUNT_COOLDOWN_MS = 24 * 60 * 60 * 1000;

    const getShouldIncrement = () => {
      try {
        const lastHitRaw = localStorage.getItem(STORAGE_KEY);
        const lastHit = lastHitRaw ? Number(lastHitRaw) : 0;

        if (!lastHit || Number.isNaN(lastHit)) {
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
          return true;
        }

        const shouldIncrement = Date.now() - lastHit > COUNT_COOLDOWN_MS;
        if (shouldIncrement) {
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
        }

        return shouldIncrement;
      } catch {
        // If storage is blocked, only read count and avoid incrementing.
        return false;
      }
    };

    const loadViews = async () => {
      try {
        const shouldIncrement = getShouldIncrement() && !navigator.webdriver;
        const action = shouldIncrement ? "hit" : "get";
        const response = await fetch(
          `https://api.countapi.xyz/${action}/${VIEWS_NAMESPACE}/${VIEWS_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to load view count");
        }

        const data = await response.json();
        setViewCount(typeof data?.value === "number" ? data.value : null);
      } catch {
        setViewCount(null);
      }
    };

    loadViews();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/topo-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* White Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#f8f8ff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Creative Designer • UI/UX Designer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning <span className="text-primary glow-text">digital</span>
                <br />
                ideas into
                <br />
                <span className="font-serif italic font-normal text-white">
                  digital experiences.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-justify animate-fade-in animation-delay-200">
                Hi, I'm John Matthew Lirio, A dedicated and passionate individual with a strong interest in UI/UX design and wireframing. Continuously driven by the desire to learn and improve, with a commitment to delivering high-quality work and striving for excellence in the field of user experience and interface design.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <a href="/john-matthew-lirio.pdf" download>
                    <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                    </AnimatedBorderButton>
                </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: ThumbsUp, href: "https://www.facebook.com/MatthewLirioo/" },
                { icon: Mail, href: "mailto:johnmatthew.lirio007@gmail.com" },
                
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="John Matthew Lirio"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience in Figma design.
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 glass rounded-xl px-3 py-2 animate-float animation-delay-200">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-semibold leading-none">
                        {viewCount !== null ? viewCount.toLocaleString() : "--"}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                        Views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I use
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};