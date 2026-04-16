import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  // { href: "/projects", label: "All Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (hash) => {
    const sectionId = hash.replace("#", "");
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(target, {
        offset: -100,
        duration: 1.1,
      });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (event, hash) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    window.history.replaceState(null, "", `/${hash}`);
    scrollToSection(hash);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(location.hash);
    });
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          JML<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-right gap-1">
          <div className="px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(event) => handleNavClick(event, link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};