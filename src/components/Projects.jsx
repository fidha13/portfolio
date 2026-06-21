export default function Projects() {
  const projects = [
    {
      title: "SmartRail",
      description:
        "Developed a full-stack railway reservation platform with visual seat selection, train search, PNR tracking, complaint management, and an AI chatbot powered by Rasa. Implemented role-based access for passengers, ticket examiners, and administrators using React, Node.js, Express, Firebase, and Rasa.",
      tech: ["React", "Node.js", "Express.js", "Firebase", "Rasa"],
      image: "/smartrail.png",
      github:
        "https://github.com/Albiin777/CSD-334-S6-23-27BATCH-SMARTRAIL",
      demo: "https://smartrail-26.vercel.app/",
    },
    {
      title: "Attendance Management System",
      description:
        "Designed and developed a web-based attendance management system for educational institutions. The platform enables administrators to manage students, subjects, attendance records, and generate attendance reports through a centralized dashboard using PHP and MySQL.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/ams.png",
      github:
        "https://github.com/fidha13/Attendance-Management-System",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-8 pt-8 pb-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-6">
            Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl">
            Projects that showcase my experience in full-stack
            development, database management, and AI-powered
            applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 items-center">
                {/* Image Section */}
        
                <div className="bg-gray-900 p-3 md:p-6 flex items-center justify-center">  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-gray-700 rounded-full px-4 py-2 text-sm hover:border-white transition duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 rounded-full px-5 py-2 hover:bg-white hover:text-black transition duration-300"
                    >
                      GitHub
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-600 rounded-full px-5 py-2 hover:bg-white hover:text-black transition duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}