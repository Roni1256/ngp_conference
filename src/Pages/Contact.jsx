import React from "react";

const Contact = () => {
  const input = "px-4 py-2 rounded-md bg-white border-2 border-gray-400 w-full";
  return (
    <div className="h-screen p-10 bg-gray-100 flex flex-items-center justify-center  ">
      <div className="bg-white shadow-md p-10 rounded-lg h-fit">
        <h1 className="text-2xl font-semibold text-center text-neutral-500 mb-10">
          Contact Us
        </h1>
        <div className=" rounded-md flex flex-col gap-5">
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl text-neutral-700 font-semibold">
              Location
            </h2>
            <p className="text-md text-neutral-600 text-justify leading-8">
              NGP Conference Center,
              <br /> Dr. N.G.P Arts and Science College,
              <br />
              Coimbatore, India
            </p>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl text-neutral-700 font-semibold">Email</h2>
            <p className="text-md text-neutral-600 text-justify">
              aicost2026@drngpasc.ac.in
            </p>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl text-neutral-700 font-semibold">Call</h2>
            <p className="text-md text-neutral-600 text-justify flex flex-col gap-3">
              <span>
                Dr. S. Poorana Senthilkumar - <b>+91 98653 64748</b>
              </span>
              <span>
                Dr.S. Uma - <b>+91 96557 68778</b>
              </span>
              <span>
                Dr. S. Maheshwari- <b>+91 82484 90674</b>
              </span>
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Contact;
