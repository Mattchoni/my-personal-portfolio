import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projectsData = [
  {
    slug: "fitquest",
    title: "Fitquest",
    description: "Mobile Based Gamified Fitness Application.",
    image: "/projects/Fitquest/f01.png",
    tags: ["Software Engineering Project", "Figma"],
    year: "2025",
    role: "UI/UX Designer",
    category: "Mobile Application",
    gallery: ["/projects/Fitquest/f01.jpg", "/projects/Fitquest/fit01.png", "/projects/Fitquest/fit02.png", "/projects/Fitquest/fit03.png", "/projects/Fitquest/fit04.png", "/projects/Fitquest/fit05.png", "/projects/Fitquest/fit06.png", "/projects/Fitquest/fit07.png", "/projects/Fitquest/fit08.png", "/projects/Fitquest/fit09.png", "/projects/Fitquest/fit10.png", "/projects/Fitquest/fit11.png", "/projects/Fitquest/fit12.png", "/projects/Fitquest/fit13.png", "/projects/Fitquest/fit14.png", "/projects/Fitquest/fit15.png", "/projects/Fitquest/fit16.png"],
    caseStudy: "Recognizing the pressing need for prioritizing physical health in today's fast-paced society, FitQuest emerges as a solution to the challenges individuals face in establishing and sustaining a regular fitness routine. Positioned as a mobile-based gamified fitness application, FitQuest not only promotes physical well-being but also injects an element of enjoyment into the pursuit of fitness goals. It aims to revolutionize the way people engage with their health by making the process both interactive and entertaining. Gamified fitness applications like FitQuest have gained popularity for their ability to motivate users through game mechanics, fostering a sense of achievement and community. By addressing the common barriers to maintaining a consistent fitness routine, FitQuest seeks to empower individuals to take charge of their health in a way that is both effective and enjoyable.",
    userProblem:
      "Users struggled to maintain a consistent fitness routine because traditional tracking apps felt repetitive, lacked motivation, and did not create long-term engagement.",
    solutionProcess: [
      "We, the developers tried to use our own fitness application which is the fitquest and we found out that the map tracking and the workout tracking is not that engaging and motivating to use.",
      "Since it is just a School Project we didn't wide our scope to test this Fitness app to a lot of users but we tried to test it to our Professor and some of our classmates and we found out that they also find it not that engaging and motivating to use.",
      "We then tried to add some gamification elements to the app like adding some rewards and challenges to make it more engaging and motivating to use.",
    ],
    resultImpact:
      "The final concept of FitQuest delivered a more engaging and motivating fitness experience by integrating gamification elements. User feedback on the prototype highlighted increased motivation to exercise, longer session durations, and a stronger sense of community through shared challenges and rewards.",
  },
  {
    slug: "moonlight",
    title: "Moonlight",
    description: "Mobile Solution for Ensuring Women's Protection at Late Hours.",
    image: "/projects/Moonlight/M01.png",
    tags: ["Software Engineering Project", "Figma"],
    year: "2024",
    role: "UI/UX Designer",
    category: "Mobile Application",
    gallery: ["/projects/Moonlight/M01.png", "/projects/Moonlight/moon01.png", "/projects/Moonlight/moon02.png", "/projects/Moonlight/moon03.png", "/projects/Moonlight/moon04.png", "/projects/Moonlight/moon05.png", "/projects/Moonlight/moon06.png", "/projects/Moonlight/moon07.png", "/projects/Moonlight/moon08.png", "/projects/Moonlight/moon09.png", "/projects/Moonlight/moon10.png"],
    caseStudy: "The Moonlight project is a dedicated effort to address a critical and pressing issue: the safety of women during late night hours. It is an issue that transcends geographical boundaries, affecting communities both locally and globally. This project aims to provide a comprehensive solution to this problem by leveraging modern technology, social awareness, and community engagement.",
    userProblem:
      "Women commuting at night often feel unsafe, with limited access to quick emergency actions, trusted contacts, and clear safety guidance in high-risk moments.",
    solutionProcess: [
      "Researched real-world safety concerns through user stories and secondary data on night-time mobility risks.",
      "Prioritized core safety flows: one-tap SOS, live location sharing, and emergency contact alerts.",
      "Designed with shake trigger that will send an SOS alert with location to trusted contacts, and a safety timer that requires periodic check-ins during late-night travel.",
    ],
    resultImpact:
      "The survey results make it clear that there is a considerable demand, with 96.9%, for a mobile safety app specifically designed to address the safety concerns of women during late-night hours. The accompanying chart illustrates that a significant portion of the surveyed population, 62.5% of students, has night classes, highlighting the importance and immediacy of addressing safety concerns in the context of late-night activities.",
  },
  {
    slug: "camaligan",
    title: "Treasury System",
    description: "LGU Real Property Tax System",
    image: "/projects/Treasury/Camaligan1.png",
    tags: ["OJT", "Figma"],
    year: "2025",
    role: "UI/UX Designer",
    category: "Web Application",
    gallery: ["/projects/Treasury/Camaligan1.png", "/projects/Treasury/lgu01.png", "/projects/Treasury/lgu02.png", "/projects/Treasury/lgu03.png", "/projects/Treasury/lgu04.png", "/projects/Treasury/lgu05.png", "/projects/Treasury/lgu06.png", "/projects/Treasury/lgu07.png", "/projects/Treasury/lgu08.png", "/projects/Treasury/lgu09.png", "/projects/Treasury/lgu10.png", "/projects/Treasury/lgu11.png", "/projects/Treasury/lgu12.png"],
    caseStudy: "This Real Property Tax System is a web application designed to streamline and enhance the efficiency of property tax management for Local Government Units (LGUs). The system provides a comprehensive platform for managing property tax records, processing payments, and generating reports. It aims to improve the accuracy and accessibility of property tax information while also enhancing the overall user experience for both LGU staff and taxpayers.",
    userProblem:
      "Tax processing workflows were time consuming and mostly manual, causing delays in record lookup, payment handling, and report preparation for LGU staff and taxpayers.",
    solutionProcess: [
      "Observed internal workflow pain points and identified repetitive tasks that could be digitized.",
      "Structured the information architecture for property records, payment status tracking, and report generation.",
      "Designed user-centered dashboard and transaction flows in Figma to minimize clicks and reduce staff errors.",
    ],
    resultImpact:
      "The implemented system demonstrates a more structured and efficient workflow for real property tax management. Although external user testing has not yet been conducted, comprehensive internal validation by the development team confirmed that all core functionalities operate as intended. Key improvements such as faster record retrieval, reduced manual data entry, and streamlined processing workflows were successfully verified during developer testing. Additionally, the system's document generation was carefully evaluated: printed outputs derived from the Figma layout align precisely with specified margins, maintain accurate text proportions, and perform reliably throughout the printing process, ensuring consistent and professional-grade documentation.",
  },
  {
    slug: "holotype",
    title: "Holotype",
    description: "A virtual keyboard for persons with motor skills difficulties.",
    image: "/projects/Holotype/Holotype1.svg",
    tags: ["Thesis", "Figma", "Python"],
    year: "2025",
    role: "Lead Developer & Researcher",
    category: "Assistive Technology",
    gallery: ["/projects/Holotype/Holotype1.svg", "/projects/Holotype/holo01.png", "/projects/Holotype/holo02.png", "/projects/Holotype/holo03.png"],
    caseStudy: "This system is created to assist person’s dealing with a condition known as dyspraxia. This offers a special virtual keyboard customized just for them, making activities like typing more manageable. It uses smart technology like computer vision and gestures to understand their hand movements, making typing and other activities smoother. This is designed to be like a special tool that makes typing and learning more enjoyable and accessible for persons with motor coordination difficulties. Addressing motor challenges in person’s, “Holotype: A Virtual Keyboard for Persons with Motor Skills Difficulties” is a special virtual keyboard in development, using smart tech like computer vision and gestures. It aims to make typing and learning easier, providing unique support for persons with difficulties in hand movements.",
    userProblem:
      "Users with motor coordination difficulties experience high typing friction on standard keyboards due to precision demands, fatigue, and limited adaptive interaction support.",
    solutionProcess: [
      "Conducted literature review and needs analysis focused on dyspraxia and motor-skill barriers in digital interaction.",
      "Designed an adaptive virtual keyboard concept using gesture aware interaction and simplified key targeting.",
      "Iterated the prototype based on accessibility principles, emphasizing comfort, reduced errors, and easier learning.",
      "Implemented a computer vision based gesture recognition system to enable intuitive typing and interaction for users with motor skill difficulties.",
    ],
    resultImpact:
      "Holotype demonstrated a more inclusive typing experience by reducing complexity and improving interaction comfort. The project supports accessibility goals by offering a practical assistive concept for users with motor skill challenges.",
  },
];

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState("");

  const galleryImages = project?.gallery?.length ? project.gallery : [project?.image].filter(Boolean);

  useEffect(() => {
    if (!galleryImages.length) {
      return;
    }

    setActiveImage(galleryImages[0]);
  }, [slug]);

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
          <div className="rounded-2xl overflow-hidden mb-6 animate-fade-in animation-delay-200">
            <img
              src={activeImage || project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Project Gallery */}
          <div className="mb-12 animate-fade-in animation-delay-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-secondary-foreground">
                Project Gallery
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {galleryImages.length} image{galleryImages.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
              {galleryImages.map((imgSrc, index) => (
                <button
                  key={imgSrc}
                  onClick={() => setActiveImage(imgSrc)}
                  className={`relative shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden border transition-all duration-300 snap-start ${
                    activeImage === imgSrc
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border/60 hover:border-primary/50"
                  }`}
                  aria-label={`Preview image ${index + 1} for ${project.title}`}
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in animation-delay-400">
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
          <div className="flex flex-wrap gap-2 mb-12 animate-fade-in animation-delay-500">
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
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in animation-delay-600">
            <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 text-justify">
              {project.caseStudy}
            </p>

            <div className="mt-10 pt-8 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
                User Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify">
                {project.userProblem}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
                Solution Process
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {project.solutionProcess.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1">0{index + 1}</span>
                    <span className="leading-relaxed text-justify">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
                Result and Impact
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify">
                {project.resultImpact}
              </p>
            </div>
          </div>

          {/* Adjacent Projects Navigation */}
          <div className="mt-16 pt-12 border-t border-border/50 animate-fade-in animation-delay-800">
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
