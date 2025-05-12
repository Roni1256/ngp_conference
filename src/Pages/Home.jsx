const Home = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl lg:text-6xl text-neutral-800 font-bold text-center w-full leading-tight">
          Welcome to NGP Conference 2025
        </h1>
        <h2 className="text-md md:text-2xl lg:text-3xl mt-4 text-center text-neutral-600">
          3 rd International Conference on Applied Intelligence and
          Communication Technologies
        </h2>
        <div className="flex flex-col items-center mt-6 space-y-2">
          <p className="font-bold text-center text-neutral-700 text-xl">
            Dr. N. G. P. Arts and Science College
          </p>
          <p className="text-neutral-700">Coimbatore, Tamil Nadu, India</p>
          <p className="text-2xl font-bold text-center mt-4 text-neutral-800">January 2026, 9.00 AM	to 4.00 PM</p>
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
              The International Conference on Applied Intelligence and
              Communication Technologies is designed to be a premier platform
              for showcasing the latest research and innovations in Artificial
              Intelligence, Machine Learning, Computational Intelligence and
              Communication Technologies. The event aims to foster interaction
              between academia, industry, and research institutions,
              facilitating knowledge exchange and collaboration across
              disciplines. The conference will include keynote talks, paper
              presentations, panel discussions and workshops focused on both
              theoretical developments and practical applications.
            </p>
          </div>

        </div>
        <div className="mt-16 flex  justify-center gap-10">
          <div className="p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4 text-center">
              Conference Objectives
            </h3>
            <ul className="text-neutral-700 leading-relaxed tracking-wide text-justify max-w-[800px] space-y-4">
              <li>• To provide a global platform for sharing cutting-edge research, emerging trends and recent innovations in the fields of Computational Intelligence, Artificial Intelligence, Machine Learning and Communication Technologies.</li>
              <li>• To facilitate knowledge exchange between academia, industry and research communities, enabling cross-sector collaboration on practical applications and technological advancements.</li>
              <li>• To foster the creation of next-generation solutions in intelligent systems and advanced communication technologies by promoting innovation and interdisciplinary collaboration.</li>
            </ul>
          </div>
          <div className="p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4  text-center">
              Scope
            </h3>
            <p className="text-neutral-700 leading-relaxed tracking-wide text-justify max-w-[800px]">
              The International Conference on Applied Intelligence and Communication Technologies aims to bring together researchers, academicians and industry professionals to explore advancements in computational intelligence, ethical AI and modern communication systems. <br />
              The conference will foster interdisciplinary collaboration, promote the exchange of innovative ideas and encourage the development of robust, real-world solutions through theoretical and applied research.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-800 mb-6">
            Contact Information
          </h3>
          <div className="text-neutral-700">
            <p>Conference Secretariat</p>
            <p>Dr. N. G. P. Arts and Science College,</p>
            <p>Coimbatore, Tamil Nadu, India</p>
            <p className="mt-4">Email: conference2025@ngp.edu.in</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;