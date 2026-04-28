import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Lenis from "lenis";

const allProjects = [
  {
    title: "Architects",
    description: "Practice UI Design.",
    image: "/projects/Architects/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Architects is a hero-section exploration focused on clean hierarchy, strong typography, and editorial composition for architecture-focused branding.",
    gallery: ["/projects/Architects/Design Black.png", "/projects/Architects/Wireframe Black.png", "/projects/Architects/Mockup Black.png"],
  },
  {
    title: "Audiora",
    description: "Practice UI Design.",
    image: "/projects/Audiora/Design White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Audiora is a concept hero section that emphasizes immersive visuals and music-first storytelling through bold contrast and fluid composition.",
    gallery: ["/projects/Audiora/Design White.png", "/projects/Audiora/Wireframe White.png", "/projects/Audiora/Mockup White.png"],
  },
  {
    title: "Aurixa",
    description: "Practice UI Design.",
    image: "/projects/Aurixa/Design White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Aurixa explores a futuristic visual language for landing hero concepts with glowing accents, layered depth, and conversion-oriented structure.",
    gallery: ["/projects/Aurixa/Design White.png", "/projects/Aurixa/Wireframe White.png", "/projects/Aurixa/Mockup White.png"],
  },
  {
    title: "Buildora",
    description: "Practice UI Design.",
    image: "/projects/Buildora/Design White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Buildora focuses on a startup-style hero treatment with sharp typography, conversion hierarchy, and concise value proposition framing.",
    gallery: ["/projects/Buildora/Design White.png", "/projects/Buildora/Wireframe White.png", "/projects/Buildora/Mockup White.png"],
  },
  {
    title: "Cortex",
    description: "Practice UI Design.",
    image: "/projects/Cortex/Design White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Cortex presents a tech-forward hero layout with modular visual blocks and messaging cadence designed for AI and software product pages.",
    gallery: ["/projects/Cortex/Design White.png", "/projects/Cortex/Wireframe White.png", "/projects/Cortex/Mockup White.png"],
  },
  {
    title: "Critic",
    description: "Practice UI Design.",
    image: "/projects/Critic/Design.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Critic is a showcase concept for media and reviews where hero messaging, trust signals, and visual rhythm establish instant credibility.",
    gallery: ["/projects/Critic/Design.png", "/projects/Critic/Wireframe.png", "/projects/Critic/Mockup.png"],
  },
  {
    title: "CryoRift",
    description: "Practice UI Design.",
    image: "/projects/CryoRift/Mockup White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "CryoRift is a stylized hero concept with a gaming-inspired tone, blending dramatic color depth and bold framing for high visual impact.",
    gallery: ["/projects/CryoRift/Mockup White.png", "/projects/CryoRift/Wireframe White.png"],
  },
  {
    title: "Euphoria",
    description: "Practice UI Design.",
    image: "/projects/Euphoria/Design.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Euphoria explores expressive hero storytelling through vivid gradients, spacious copy treatment, and emotionally led product positioning.",
    gallery: ["/projects/Euphoria/Design.png", "/projects/Euphoria/Wireframe.png"],
  },
  {
    title: "Fuze",
    description: "Practice UI Design.",
    image: "/projects/Fuze/Design.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Fuze showcases a high-energy hero direction where product highlights, call-to-action clarity, and visual punch work in a compact fold.",
    gallery: ["/projects/Fuze/Design.png", "/projects/Fuze/Wireframe.png", "/projects/Fuze/Mockup.png"],
  },
  {
    title: "Giga",
    description: "Practice UI Design.",
    image: "/projects/Giga/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Giga is a performance-focused hero concept balancing bold messaging with clean layout patterns ideal for SaaS and productivity brands.",
    gallery: ["/projects/Giga/Design Black.png", "/projects/Giga/Wireframe Black.png", "/projects/Giga/Mockup Black.png"],
  },
  {
    title: "HR",
    description: "Practice UI Design.",
    image: "/projects/HR/HR1.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "HR is a practice interface concept built around hiring and people operations, using approachable hierarchy and confidence-driven visual cues.",
    gallery: ["/projects/HR/HR1.png", "/projects/HR/HR2.png", "/projects/HR/HR3.png", "/projects/HR/HR4.png", "/projects/HR/HR5.png", "/projects/HR/HR6.png"],
  },
  {
    title: "Jumeno",
    description: "Practice UI Design.",
    image: "/projects/Jumeno/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Jumeno presents a playful hero direction that mixes large headlines, visual softness, and clear CTA hierarchy for consumer products.",
    gallery: ["/projects/Jumeno/Design Black.png", "/projects/Jumeno/Wireframe Black.png", "/projects/Jumeno/Mockup Black.png"],
  },
  {
    title: "Lumiere",
    description: "Practice UI Design.",
    image: "/projects/Lumiere/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Lumiere explores a premium visual identity for hero layouts through cinematic spacing, serif accents, and polished composition.",
    gallery: ["/projects/Lumiere/Design Black.png", "/projects/Lumiere/Wireframe Black.png", "/projects/Lumiere/Mockup Black.png"],
  },
  {
    title: "Music",
    description: "Practice UI Design.",
    image: "/projects/Music/Design.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Music is a hero UI concept centered on rhythm and motion, combining expressive typography with layered media-focused visual treatment.",
    gallery: ["/projects/Music/Design.png", "/projects/Music/Wireframe.png", "/projects/Music/Mockup.png"],
  },
  {
    title: "Noir",
    description: "Practice UI Design.",
    image: "/projects/Noir/Design White.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "Noir is a minimal yet dramatic hero exploration using stark contrast, restrained elements, and focused messaging for premium branding.",
    gallery: ["/projects/Noir/Design White.png", "/projects/Noir/Wireframe White.png", "/projects/Noir/Mockup White.png"],
  },
  {
    title: "RecipeHub",
    description: "Practice UI Design.",
    image: "/projects/RecipeHub/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "RecipeHub explores a food-focused hero pattern that prioritizes appetizing visuals, intuitive hierarchy, and quick-call interaction points.",
    gallery: ["/projects/RecipeHub/Design Black.png", "/projects/RecipeHub/Wireframe Black.png", "/projects/RecipeHub/Mockup Black.png"],
  },
  {
    title: "RLTY",
    description: "Practice UI Design.",
    image: "/projects/RLTY/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "RLTY is a real estate inspired hero concept with a polished grid, trust-first messaging, and visual hierarchy optimized for conversion.",
    gallery: ["/projects/RLTY/Design Black.png", "/projects/RLTY/Wireframe Black.png", "/projects/RLTY/Mockup Black.png"],
  },
  {
    title: "VeloStride",
    description: "Practice UI Design.",
    image: "/projects/VeloStride/Design Black.png",
    tags: ["Figma", "2025"],
    year: "2025",
    role: "UI Designer",
    category: "Hero Section Showcase",
    caseStudy:
      "VeloStride showcases an active lifestyle hero composition with fast-scanning structure, energetic branding, and confident CTA placement.",
    gallery: ["/projects/VeloStride/Design Black.png", "/projects/VeloStride/Wireframe Black.png", "/projects/VeloStride/Mockup Black.png"],
  },
];

export const Playground = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const modalScrollWrapperRef = useRef(null);

  const deriveGalleryFromFolder = (path) => {
    if (!path) return [];

    const looksLikeFolder = path.endsWith("/") || !/\.[a-zA-Z0-9]+$/.test(path);
    if (!looksLikeFolder) return [path];

    const base = path.endsWith("/") ? path : `${path}/`;
    const candidates = [];

    for (let i = 1; i <= 12; i++) {
      const p = i.toString();
      candidates.push(`${base}${i}.png`);
      candidates.push(`${base}${i}.jpg`);
      candidates.push(`${base}${i}.jpeg`);
      candidates.push(`${base}img${i}.png`);
      candidates.push(`${base}img${i}.jpg`);
      candidates.push(`${base}image${i}.png`);
      candidates.push(`${base}0${p}.png`);
      candidates.push(`${base}0${p}.jpg`);
    }

    candidates.push(`${base}cover.png`, `${base}cover.jpg`, `${base}index.png`, `${base}index.jpg`);

    return Array.from(new Set(candidates));
  };

  const preloadImages = (urls) => {
    const loaders = urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          const safe = encodeURI(url);
          img.onload = () => resolve({ url, ok: true });
          img.onerror = () => resolve({ url, ok: false });
          img.src = safe;
        })
    );

    return Promise.all(loaders).then((results) => results.filter((r) => r.ok).map((r) => r.url));
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const candidates = selectedProject.gallery && selectedProject.gallery.length
      ? selectedProject.gallery
      : deriveGalleryFromFolder(selectedProject.image || "");

    preloadImages(candidates).then((valid) => {
      if (valid && valid.length) {
        setGalleryImages(valid);
        setActiveImage(valid[0]);
      } else {
        const fallback = selectedProject.image ? [selectedProject.image] : [];
        setGalleryImages(fallback);
        setActiveImage(fallback[0] || "");
      }
    });

    const onEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
      setGalleryImages([]);
      setActiveImage("");
      window.removeEventListener("keydown", onEsc);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject || !modalScrollWrapperRef.current) {
      return;
    }

    const wrapper = modalScrollWrapperRef.current;
    const content = wrapper.firstElementChild;

    if (!content) {
      return;
    }

    const modalLenis = new Lenis({
      wrapper,
      content,
      duration: 0.95,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId = 0;

    const raf = (time) => {
      modalLenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      modalLenis.destroy();
    };
  }, [selectedProject]);

  return (
    <>
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
                className="group glass rounded-xl overflow-hidden animate-fade-in relative"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${project.title} in modal`}
                />

                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 z-30 pointer-events-none">
                    <div className="p-2.5 rounded-full glass text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-1 md:group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 z-30 pointer-events-none md:hidden">
                    <span className="px-2.5 py-1 rounded-full glass text-[11px] tracking-wide uppercase text-secondary-foreground">
                      Tap to view
                    </span>
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-120 bg-black/70 backdrop-blur-sm px-4 py-6 md:p-8 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          style={{ touchAction: "none" }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="max-w-5xl mx-auto glass border border-border/60 rounded-2xl animate-fade-in h-full max-h-full overflow-hidden">
            <div
              ref={modalScrollWrapperRef}
              className="h-full overflow-y-auto overscroll-contain"
              style={{ touchAction: "pan-y" }}
            >
              <div className="p-5 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{selectedProject.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="shrink-0 p-2 rounded-lg border border-border/60 hover:border-primary/60 hover:text-primary transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={encodeURI(activeImage || selectedProject.image)}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg md:text-xl font-semibold text-secondary-foreground">
                      Project Gallery
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {galleryImages.length} image{galleryImages.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {galleryImages.map((imgSrc, index) => (
                      <button
                        key={`${selectedProject.title}-${imgSrc}`}
                        type="button"
                        onClick={() => setActiveImage(imgSrc)}
                        className={`relative shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden border transition-all duration-300 snap-start ${
                          activeImage === imgSrc
                            ? "border-primary shadow-lg shadow-primary/20"
                            : "border-border/60 hover:border-primary/50"
                        }`}
                        aria-label={`Preview image ${index + 1} for ${selectedProject.title}`}
                      >
                        <img
                          src={encodeURI(imgSrc)}
                          alt={`${selectedProject.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="glass rounded-xl p-5 border border-border/50">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      Year
                    </p>
                    <p className="text-xl font-semibold text-secondary-foreground">
                      {selectedProject.year}
                    </p>
                  </div>
                  <div className="glass rounded-xl p-5 border border-border/50">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      Role
                    </p>
                    <p className="text-xl font-semibold text-secondary-foreground">
                      {selectedProject.role}
                    </p>
                  </div>
                  <div className="glass rounded-xl p-5 border border-border/50">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                      Category
                    </p>
                    <p className="text-xl font-semibold text-secondary-foreground">
                      {selectedProject.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={`${selectedProject.title}-${tag}`}
                      className="px-4 py-2 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="glass rounded-2xl p-6 md:p-8 border border-border/50">
                  <h4 className="text-2xl font-bold mb-4 text-secondary-foreground">
                    Project Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify">
                    {selectedProject.caseStudy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
