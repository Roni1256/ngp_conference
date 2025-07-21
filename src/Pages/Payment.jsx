import React from "react";

const Payment = () => {
  const pay = [
    {
      name: "academician",
      inr: "9,000",
      usd: "150",
    },
    {
      name: "Research Scholar/Student",
      inr: "8,0000",
      usd: "130",
    },
    {
      name: "Industrialist",
      inr: "12,000",
      usd: "180",
    },
    {
      name: "Observer",
      inr: "1,500",
      usd: "18",
    },
  ];
  return (
    <div className="p-20 ">
      <div className="mt-16">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6">Conference Fee</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-3"></th>

                  <th className="px-6 py-3">INR</th>
                  <th className="px-6 py-3">USD</th>
                </tr>
              </thead>
              <tbody>
                {pay.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium capitalize">{item.name}</td>

                    <td className="px-6 py-4 font-medium">{item.inr}</td>
                    <td className="px-6 py-4">{item.usd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
