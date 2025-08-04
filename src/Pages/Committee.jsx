import React from "react";
import Table from "../Component/Table";
import reviewers from "../utils/reviewers";

const Committee = () => {
  const patrons = [
    {
      name: "Dr. Nalla. G. Palaniswami M.D., A.B., (USA)",
      role: "Chairman, Dr. NGPRET",
    },
    {
      name: "Dr. Thavamani D. Palaniswami M.D., A.B., (USA)",
      role: "CSecretary, Dr. N.G.P. Arts and Science College",
    },
    {
      name: "Mrs. Mathura V. Palaniswami",
      role: "Director - Academy for Professional Development",
    },
    {
      name: "Dr. P. R. Muthuswamy",
      role: "Director - Dr. N.G.P. Educational Institutions",
    },
    {
      name: "Dr. O.T. Buvaneswaran",
      role: "CEO, Dr. N.G.P. Research and Educational Trust",
    },
  ];
  const chairPerson = [
    {
      name: "Dr. S. Saravanan",
      role: "Principal, Dr. N.G.P. Arts and Science College",
    },
  ];

  const streetingCommittee = [
    {
      name: "Dr. F. Mary Magdalene Jane",
      role: "Dean - Computer Science",
    },
    {
      name: "Dr. K. Ramamurthi",
      role: "Dean - Academics",
    },
    {
      name: "Dr. K. Kalimuthu",
      role: "Dean - R & D",
    },
    {
      name: "Dr. P.B. Banudevi",
      role: "Dean - Commerce & Management",
    },
    {
      name: "Dr. Meera Raman",
      role: "Dean - Basic and Applied Sciences & Bio Sciences",
    },
  ];
  const Convenor = [
    {
      name: "Dr. S. Poorana Senthilkumar",
      role: "HoD – Computer Applications ",
    },
  ];

  const Treasurer = [
    {
      name: "Dr. A. Adhiselvam",
      role: "HoD - Information Technology",
    },
  ];
  const organizing = [
    {
      name: "Dr. S. Uma",
      role: "HoD - Computer Science",
    },
    {
      name: "Dr. M. Rathi",
      role: "HoD - Computer Technology",
    },
    {
      name: "Dr. A. Nirmala",
      role: "HoD - Computer Science with Cognitive Systems",
    },
    {
      name: "Dr. V. Pream Sudha",
      role: "HoD - Computer Science with Data Analytics",
    },
    {
      name: "Dr. S. Saranya",
      role: "HoD - Artificial Intelligence and Machine Learning",
    },
    {
      name: "Dr. V. Shobana",
      role: "HoD - Computer Science with Cyber Security",
    },
    {
      name: "Dr. P. Usha ",
      role: "Associate Professor - Computer Science",
    },
    {
      name: "Dr. S. Maheshwari",
      role: "Assistant Professor - Computer Science ",
    },
  ];

  const comits = [
    {
      committee: "Ling Huo Choong",
      institution: "RMIT , Vietnam",
    },
    {
      committee: "Melinda Melinda",
      institution: "Universitas Syiah Kuala, Indonesia",
    },
    {
      committee: "Erick Purwanto",
      institution: "Xian-Jiaotong Liverpool University (XLJTU), China",
    },
    {
      committee: "Filbert H Juwono ",
      institution: "Xian-Jiaotong Liverpool University (XLJTU), China",
    },
    {
      committee: "Chew Ing Ming ",
      institution: "Curtin University Malaysia",
    },
    {
      committee: "Wong Wei Kitt",
      institution: "Curtin University Malaysia",
    },
    {
      committee: "Sivaraman Eswaran ",
      institution: "Curtin University Malaysia",
    },
    {
      committee:"Jimson Matthews",
      institution:"IIT India"
    },
    {
      committee:"Zhang Dong ",
      institution:"Haikou University of Economics, China"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
            Committee
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        {/* Honorary Chairs */}
        <div className="w-full flex  justify-center gap-7">
          <div className="flex flex-col gap-3 w-full border-b-2 md:border-b-0 md:border-r-2 border-gray-500 p-5">
            <Section title={"Patrons"} data={patrons} />
            <Section title={"Conference Chair"} data={chairPerson} />
            <Section title={"STEERING COMMITTEE"} data={streetingCommittee} />
            <Section title={"CONVENOR"} data={Convenor} />
            <Section title={"TREASURER"} data={Treasurer} />
            <Section title={"ORGANIZING SECRETARIES"} data={organizing} />
          </div>
          {/* <div className="w-1 h-screen bg-gray-800 rounded-full" /> */}
          <div className="w-full">
            <Section2
              title={"International Advisory Committee"}
              data={comits}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;

function Section({ title, data }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200 uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-5">
        {data.map((value, i) => {
          return (
            <li className="space-y-2 text-gray-700 flex flex-col " key={i}>
              <span className="text-xl font-semibold text-gray-800">
                {value.name}
              </span>
              {value.role && (
                <span className="text-md text-gray-600">{value.role}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Section2({ title, data }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200 uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-5">
        {data?.map((value, i) => {
          return (
            <li className="space-y-2 text-gray-700 flex flex-col " key={i}>
              <span className="text-xl font-semibold text-gray-800">
                {value.committee}
              </span>
              {value.institution && (
                <span className="text-md text-gray-600">
                  {value.institution}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
