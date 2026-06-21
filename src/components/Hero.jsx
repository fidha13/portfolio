export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-xs md:text-sm tracking-[0.25em] md:tracking-[0.4em] uppercase text-gray-500 mb-6 md:mb-8">
              Full Stack Developer • AI Enthusiast
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-2">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-8">
              Fidha Safar
            </h1>

            <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10">
              Computer Science Engineering student passionate about
              building practical software solutions through web
              development, AI-powered applications, and real-world
              problem solving.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-700 rounded-full hover:border-white transition duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-gray-700 shadow-[0_0_80px_rgba(255,255,255,0.08)]">
              <img
                src="/profile.png"
                alt="Fidha Safar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}