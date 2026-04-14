import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "As a person who does not have any idea or expertise in UI/UX design, I feel amazed upon seeing the designs made by John Matthew Lirio. I am present since the very beginning of his journey,  up until now. The interface is clean, easy to understand, and simple to navigate. I felt satisfied and impressed and I wondered how something so well-made was created. The work looks professional and is very enjoyable to use. I had the privilege of experiencing his design services as a client.",
    author: "Aila Khylene De Leon",
    role: "Client",
    avatar:
      "/avatars/Avatarr1.png",
  },
  {
    quote:
      "John Matthew is a skilled UI/UX designer who creates clean, intuitive, and user-friendly designs. I had the opportunity to collaborate with him on Fitquest, a gamified fitness tracker, where he handled the UI/UX while I worked on the Front End. Our workflow was smooth because of his strong collaboration and communication skills. He is open to feedback and easy to work with, making him not only a talented designer but also a reliable team player.",
    author: "Jhamel Mamasao",
    role: "UI/UX, Frontend Developer, Fitquest",
    avatar:
      "/avatars/Avatar2.jpg",
  },
  {
    quote:
      "Working with John Matthew as our UI/UX designer was a great experience. His prototype for the LGU Real Property Tax System and other minor Digital services was clean, minimal, and very user-friendly. He consistently delivered ahead of deadlines without sacrificing quality, making a big impact on the project.",
    author: "Patrick James De Leon",
    role: "OJT Supervisor, Camaligan LGU",
    avatar:
      "/avatars/Avatar3.jpg",
  },
  {
    quote:
      "He's a very skilled designer whom I can say is proficient at using Figma. He has a great eye for detail and always creates high quality designs that make our projects look professional and polished.",
    author: "Aubrey Bargola",
    role: "Client, Student",
    avatar:
      "/avatars/Avatarr4.jpg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What people say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Thoughts and experiences shared by{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};