import React from "react";

const PrevConf = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
          Previous Conference
        </h1>

        <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center rounded-lg overflow-hidden gap-20">
        <img src="img-1.png" alt="img" className="w-full h-full rounded-lg" />
        <img src="img-2.png" alt="img" className="w-full h-full rounded-lg" />
        {/* <img src="img-4.png" alt="img" className="w-1/2 rounded-lg " /> */}
        <img src="img-3.png" alt="img" className="w-full h-full rounded-lg" />
        <img src="img-5.png" alt="img" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <p className="max-w-1/2 bg-white border border-gray-300 p-20 text-xl text-gray-600 text-justify rounded-md">
            As part of our track record, we successfully organized the ICCICT conference in 2024 and 2025. The event witnessed active participation, with more than 150 attendees engaging in the offline conference.
        </p>
      </div>
    </div>
  );
};

export default PrevConf;
