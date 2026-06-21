export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["Firebase"],
    },
    {
      title: "AI & Chatbots",
      skills: ["Rasa", "Machine Learning"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white px-6  pt-6 pb-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold">
            Tech Stack
          </h2>

          <p className="text-gray-400 text-lg mt-3 max-w-xl leading-relaxed">
            A collection of technologies and tools I use to build web
            applications, AI-powered solutions, and real-world software
            projects.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                border border-gray-800
                rounded-2xl
                p-8
                hover:border-gray-500
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      border border-gray-600
                      rounded-full
                      px-4 py-2
                      text-sm
                      text-gray-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}