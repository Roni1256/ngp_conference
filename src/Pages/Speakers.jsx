  const SpeakerCard = ({ image, name, title, expertise,text }) => {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-2xl text-white font-bold">{text}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-md text-indigo-600 font-medium mb-2">{title}</p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto my-3"></div>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">{expertise}</p>
        </div>
      </div>
    )
}


const Speakers = () => {
   const speakers=[
    {
      name: "Dr. Jey Veerasamy",
      affiliation: "Department of Computer Science, Erik Jonsson School of Engineering & Computer Science, The University of Texas at Dallas, USA",
      role: "Keynote Speaker",
      text:"J"
    },
    {
      name: "Dr. Wong Wei Kitt",
      affiliation: "Department of Electrical and Computer Engineering, Curtin University, Malaysia",
      role: "Technical Program Chair",
      text:"W"
    },
    {
      name: "Dr. Wilfred Blessing N R",
      affiliation: "College of Computing and Information Science, University of Technology and Applied Science, Ibri, Oman",
      role: "Member, Review Committee",
      text:"W"
    },
    {
      name: "Mr. Ajith S",
      affiliation: "Senior Security Engineer, Plum Desing, Inc, Hyderabad, India",
      role: "Industry Speaker (Next-Gen Communication and Security Systems)",
      text:"A"
    },
    {
      name: "Prof. U Dinesh Kumar",
      affiliation: "Indian Institute of Management, Bangalore (IIMB), India",
      role: "Technical Program Chair",
      text:"D"
    },
    {
      name: "Mr. Pandiyan Adiyapatham",
      affiliation: "Assistant Vice President, Cognizant, Chennai, India",
      role: "Industry Speaker (Transforming Intelligence across Industries with Gen AI)",
      text:"P"
    }
  ]
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Speakers
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Meet our distinguished speakers and industry experts
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.role}
              expertise={speaker.affiliation}
              text={speaker.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speakers