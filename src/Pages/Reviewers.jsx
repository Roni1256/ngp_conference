import React from "react";
import reviewers from "../utils/reviewers";
import Table from "../Component/Table";

const Reviewers = () => {
    const tcpchair=["Dr. S. Uma", "Dr. V. Pream Sudha", "Dr. P. Usha ","Dr. S. Maheshwari"]
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
            TPC
          </h1>

          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-700 mb-4 uppercase">
            Publication Chairs
          </h1>
          <ul className="flex flex-col gap-5 mb-10 p-4 bg-white rounded-md list-disc">

            {tcpchair.map((value,i)=>{
                return (
                    <li className="w-full flex flex-col gap-5  rounded-lg text-xl font-semibold text-gray-800">
                        {value}
                    </li>
                )
            })
        }
        <span className="text-lg text-gray-600">Dr. N. G. P. Arts and Science College</span>
          </ul>
          {/* <Table title={"TCP Chair"} data={tcpchair}/> */}
        <Table
          title={"TPC External Members"}
          data={reviewers.externalReviewers}
        />
        <hr className="border-gray-300 my-10"/>
        <Table
          title={"TPC Internal Members"}
          data={reviewers.internalReviewers}
        />
      </div>
    </div>
  );
};

export default Reviewers;
