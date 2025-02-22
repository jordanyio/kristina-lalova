import React from 'react';

const researchAreas = [
  {title: "Labor & Finance", description: "Workforce dynamics and market interactions"},
  {title: "Corporate Finance", description: "Capital structure and governance impacts"},
  {title: "Behavioral Finance", description: "Decision-making biases in markets"},
  {title: "Labor Markets", description: "Employment trends and financial consequences"},
  {title: "Private Equity", description: "Investment strategies and performance metrics"},
  {title: "Empirical Methods", description: "Data-driven approaches to financial research"}
];

const ResearchInterests = () => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Focus Areas</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {researchAreas.map((area, index) => (
          <div key={index} className="relative group flex flex-col">
            <div className="absolute inset-0 bg-rose-700 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white border border-rose-100 rounded-lg p-6 text-center hover:shadow-md transition-all flex-1">
              <div className="text-rose-700 font-semibold text-lg">{area.title}</div>
              <div className="mt-2 text-gray-600">{area.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchInterests;
