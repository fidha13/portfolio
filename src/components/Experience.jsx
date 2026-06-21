export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white px-6 md:px-8 pt-8 pb-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Experience
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-3xl">
          Leadership experience through student activities and
          organizational responsibilities.
        </p>

        <div className="border border-gray-800 rounded-3xl p-10 hover:border-gray-600 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-2">
            Documentation Lead
          </h3>

          
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
            <p className="text-gray-400 text-lg">
              Alumni Relation Cell (ARC) – CEC
            </p>

            <span className="text-gray-500">
              • 2025 – 26
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Led documentation activities for the Alumni Relation Cell
            (ARC), contributing to event reports, official records, and
            communication materials while collaborating with team
            members to support alumni engagement initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}