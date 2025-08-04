import React from "react";
import { Link } from "react-router-dom";

const CallForPaper = () => {
  const topics = [
    {
      title: "Core Artificial Intelligence and Machine Learning",
      list: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "Interpretable Machine Learning",
        "Responsible AI",
        "Pattern Recognition",
        "Neural Networks",
        "Generative Models",
      ],
    },
    {
      title: "Data Science and Analytics",
      list: ["Data Science", "Big Data Analytics", "Bioinformatics"],
    },
    {
      title: "Security and Forensics",
      list: ["Cyber Security", "Digital Forensics", "Blockchain Technology","Cyber Physical System","Financial Security"  ],
    },
    {
      title: "Cloud, High Performance and Distributed Computing",
      list: [
        "Cloud Computing",
        "High Performance Computing and Networks",
        "Parallel and Distributed Computing",
      ],
    },
    {
      title: "Human-Centric Computing",
      list: [
        "Human Computer Interaction and Information Visualization",
        "Network and Social Computing",
      ],
    },
    {
      title: "Computational Systems and Engineering",
      list: [
        "Embedded Systems",
        "Embedded and Internet of Things Systems",
        "Robotics",
        "Intelligent Computing",
      ],
    },
    {
      title: "Natural Language and Vision",
      list: ["Natural Language Processing", "Computer Vision"],
    },
    {
      title: "Theoretical and Emerging Technologies",
      list: ["Quantum Computing"],
    },
  ];

  const reviewProcess = [
    "A double-blind peer review mechanism will be followed",
    "Each paper will be reviewed by at least two independent reviewers from the Technical Program Committee or the extended reviewer pool",
    "Reviewers will be selected based on domain expertise and publication record",
  ];

  const evaluationCriteria = [
    "Originality and Novelty",
    "Technical Depth and Accuracy",
    "Relevance to Conference Themes",
    "Clarity of Presentation and Organization",
    "Practical Significance or Theoretical Contribution",
    "Compliance with Ethical Standards and Plagiarism Check",
  ];

  const authorRequirements = [
    "Only papers presented by at least one registered author in person (or live online in hybrid format, if applicable) will be included in the final proceedings",
    "Certificates of presentation will be issued only upon verified participation",
    "Authors must provide an official ID at registration and during the session",
    'A "No Show = No Publication" policy will be strictly enforced',
    "Session chairs will maintain attendance records and report any absentees",
  ];

  return (
    <div className="py-20 px-10 bg-white">
      <h2 className="text-2xl font-semibold text-neutral-700 mb-6 flex items-center justify-between">
        <span>Conference Tracks</span>
        <div className="flex gap-4">
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
            className="text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Submit Paper
          </a>
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
            className="text-lg font-semibold bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Register Now
          </a>
          <Link
            to={'/payment'}
            className="text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Payment
          </Link>
        </div>
      </h2>
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {topics.map((topic, index) => {
          return (
            <div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
              key={index}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-700 mb-4 border-b pb-3 border-b-blue-200 flex items-center">
                    <div className="w-[8px] h-[8px] bg-blue-600 rounded-full mr-2"></div>
                    {topic.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {topic.list.map((item, index) => {
                      return (
                        <li key={index} className="flex items-start">
                          <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Review Process Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-neutral-700 mb-6">
          Paper Review Process
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100 shadow-sm">
          <p className="text-gray-700 mb-4 italic">
            Our rigorous review process ensures the highest quality of accepted
            papers:
          </p>
          <ul className="space-y-3">
            {reviewProcess.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Evaluation Criteria Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-neutral-700 mb-6">
          Evaluation Criteria
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {evaluationCriteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-l-indigo-600 shadow-md flex items-center"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-700 font-bold">{index + 1}</span>
              </div>
              <span className="text-gray-800 font-medium">{criterion}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Author Presentation Requirements */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-neutral-700 mb-6">
          Ensuring Author Presentation
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-amber-800 font-semibold">
              To ensure the quality and integrity of the conference:
            </p>
          </div>
          <ul className="space-y-4">
            {authorRequirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <div className="min-w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-amber-800 font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 pt-1">{req}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-amber-100 rounded-lg border border-amber-200">
            <p className="text-amber-800 font-bold text-center">
              Important: Our "No Show = No Publication" policy will be strictly
              enforced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
