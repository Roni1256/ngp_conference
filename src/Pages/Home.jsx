const Home = () => {
  const dates = [
    {
      event: "Full paper submission",
      date: "25, November, 2025",
    },
    {
      event: "Full paper acceptance",
      date: "01, December, 2025",
    },
    {
      event: "Close registration & payment",
      date: "15, December, 2025",
    },
    {
      event: "Final camera ready",
      date: "15, December, 2025",
    },
    {
      event: "Conference date",
      date: "03, January, 2026",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl lg:text-6xl text-neutral-800 font-bold text-center w-full leading-12 lg:leading-20">
          Emerging Trends in Applied Intelligence, Communication and Security
          Technologies
        </h1>
        <h2 className="text-md md:text-2xl lg:text-3xl mt-4 text-center text-neutral-600">
          AICOST – 2026
        </h2>
        <div className="flex flex-col items-center mt-6 space-y-2">
          <p className="font-bold text-center text-neutral-700 text-xl">
            Dr. N. G. P. Arts and Science College
          </p>
          <p className="text-neutral-700">Coimbatore, Tamil Nadu, India</p>
          <p className="text-2xl font-bold text-center mt-4 text-neutral-800">
            03 January, 2026
          </p>
        </div>

        <div className="flex w-full items-center justify-center mt-8">
          <img
            src="ngp.jpg"
            alt="NGP campus"
            className=" w-full shadow-lg rounded-lg"
          />
        </div>
        <div className=" mt-16">
          <div className=" p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4  text-center">
              About the Conference
            </h3>
            <p className="text-neutral-700 leading-relaxed tracking-wide text-justify max-w-[800px]">
              The International Conference on Emerging Trends in Applied
              Intelligence, Communication, and Security Technologies is designed
              to be a premier platform for showcasing the latest research and
              innovations in Artificial Intelligence, Machine Learning,
              Computational Intelligence and Communication Technologies. The
              event aims to foster interaction between academia, industry, and
              research institutions, facilitating knowledge exchange and
              collaboration across disciplines. The conference will include
              keynote talks, paper presentations, panel discussions and
              workshops focused on both theoretical developments and practical
              applications.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row  justify-center gap-10">
          <div className="p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4 text-center">
              Conference Objectives
            </h3>
            <ul className="text-neutral-700 leading-relaxed tracking-wide text-justify max-w-[800px] space-y-4">
              <li>
                • To provide a global platform for sharing cutting-edge
                research, emerging trends and recent innovations in the fields
                of Computational Intelligence, Artificial Intelligence, Machine
                Learning and Communication Technologies.
              </li>
              <li>
                • To facilitate knowledge exchange between academia, industry
                and research communities, enabling cross-sector collaboration on
                practical applications and technological advancements.
              </li>
              <li>
                • To foster the creation of next-generation solutions in
                intelligent systems and advanced communication technologies by
                promoting innovation and interdisciplinary collaboration.
              </li>
            </ul>
          </div>
          <div className="p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4  text-center">
              Scope
            </h3>
            <p className="text-neutral-700 leading-relaxed tracking-wide text-justify max-w-[800px]">
              The International Conference on Emerging Trends in Applied
              Intelligence, Communication, and Security Technologies aims to
              bring together researchers, academicians and industry
              professionals to explore advancements in computational
              intelligence, ethical AI and modern communication systems. <br />
              The conference will foster interdisciplinary collaboration,
              promote the exchange of innovative ideas and encourage the
              development of robust, real-world solutions through theoretical
              and applied research.
            </p>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center gap-10 lg:gap-20">
          <img
            src="./curtin.png"
            alt="ICT logo"
            className="max-w-[120px] md:max-w-[200px] lg:max-w-[200px] w-full mt-10"
          />
          <img
            src="./analyticIndia.png"
            alt="ICT logo"
            className="max-w-[120px] md:max-w-[200px] lg:max-w-[200px] w-full mt-10"
          />

          <img
            src="./ICT.png"
            alt="ICT logo"
            className="max-w-[120px] md:max-w-[200px] lg:max-w-[200px] w-full"
          />
        </div>
        <div className="mt-16">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Important dates</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-6 py-3">Event</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 font-medium">{item.event}</td>
                      <td className="px-6 py-4">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
