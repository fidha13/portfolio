export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-8 pt-8 pb-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-3xl">
          Feel free to reach out for opportunities, collaborations,
          or project discussions.
        </p>

        <div className="border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition-all duration-300">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <a
                href="mailto:fidhasafar1903@gmail.com"
                className="text-gray-400 hover:text-white transition"
              >
                fidhasafar1903@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                GitHub
              </h3>

              <a
                href="https://github.com/fidha13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                github.com/fidha13
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/fidha-safar-284b92313/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                linkedin.com/in/fidha-safar-284b92313
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}