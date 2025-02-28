import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from "lucide-react";
import PDFViewer from './PDFViewer';

// Research paper data stays the same
const researchPapers = [
    { 
      id: 1, 
      title: "Predicting Bankruptcy: Ask the Employees",
      author: "Professor Kristina Lalova & Professor John Knopf",
      year: 2023,
      journal: "Nature Digital Medicine",
      abstract: "The paper demonstrates that employees' attitudes, as captured through Glassdoor reviews and ratings, serve as strong predictors of corporate bankruptcy – especially two to three years before bankruptcy filings – outperforming traditional financial models in early-stage predictions and also predicting whether a company will successfully emerge from bankruptcy.",
      file: "/papers/PredictingBankruptcy.pdf",
      tags: ["Bankruptcy", "Employee Sentiment", "Financial Prediction", "Glassdoor Data"]
    },
    { 
      id: 2, 
      title: "The Value of Employee Morale in M&A Deals: Evidence from Glassdoor",
      author: "Professor Kristina Lalova",
      year: 2023,
      journal: "Quantum Science and Technology",
      abstract: "The paper demonstrates that emotional contagion plays a critical role in mergers and acquisitions, as the morale of target employees transmits to acquirer employees, influencing post-merger performance, integration success, and deal outcomes, with high-morale targets boosting acquirer morale and performance, while low-morale targets risk dragging acquirer morale down.",
      file: "/papers/EmployeeMorale.pdf",
      tags: ["Mergers & Acquisitions", "Employee Morale", "Glassdoor Data", "Corporate Performance"]
    },
    { 
      id: 3, 
      title: "Scoring Profits? The Impact of Private Equity Investments on Soccer Clubs",
      author: "Professor Kristina Lalova",
      year: 2024,
      journal: "IEEE Security & Privacy",
      abstract: "The paper finds that while private equity (PE) investments in European football clubs enhance financial outcomes – boosting commercial revenues, sponsorships, and player salaries – these gains come at the expense of on-field performance, particularly in away matches and for female teams, due to disruptions in team dynamics, squad turnover, and declining player interconnectedness.",
      file: "/papers/ScoringProfits.pdf",
      tags: ["Private Equity", "Sports Finance", "Soccer Clubs", "Investment Impact"]
    },
    { 
      id: 4, 
      title: "Untangling Employee Morale in Private Equity Deals",
      author: "Professor Kristina Lalova",
      year: 2023,
      journal: "IEEE Security & Privacy",
      abstract: "The paper finds that private equity (PE) firms strategically target companies with different employee morale levels, leveraging their expertise to manage and integrate dissimilar work cultures, leading to higher operating performance and efficiency, often through workforce restructuring.",
      file: "/papers/UntanglingEmployeeMorale.pdf",
      tags: ["Private Equity", "Employee Morale", "Corporate Restructuring", "Workplace Culture"]
    }
];
  

const ResearchPapers = ({ isLoaded, isMobile }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isIPad, setIsIPad] = useState(false);

  useEffect(() => {
    const checkIPad = () => {
      const ua = navigator.userAgent;
      const isIPadOS = ua.match(/iPad/i) || (ua.match(/Mac/i) && 'ontouchend' in document);
      setIsIPad(isIPadOS);
    };

    checkIPad();
    window.addEventListener('resize', checkIPad);
    return () => window.removeEventListener('resize', checkIPad);
  }, []);

  const handleClosePDF = () => {
    setSelectedPaper(null);
  };

  return (
    <section id="research-papers" className="py-16 relative z-10">
      {/* Semi-transparent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-rose-50/90" />
      
      {/* Content container */}
      <div className={`relative z-20 mx-auto px-6 ${
        selectedPaper ? 'max-w-[1400px] transition-all duration-500' : 'max-w-7xl transition-all duration-300'
      }`}>
        <div className={`mb-12 page-transition ${
          isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'
        }`} style={{ transitionDelay: '200ms' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Papers</h2>
          <div className="w-24 h-1 bg-rose-700 rounded-full"></div>
          <p className="text-xl text-rose-700 font-light mt-6">
            {isMobile || isIPad ? "Select a paper to download" : "Select a paper to view its contents"}
          </p>
        </div>
        
        {!isMobile && !isIPad ? (
          <DesktopLayout 
            selectedPaper={selectedPaper} 
            setSelectedPaper={setSelectedPaper} 
            handleClosePDF={handleClosePDF}
          />
        ) : (
          <TabletMobileLayout />
        )}
      </div>
    </section>
  );
};

const DesktopLayout = ({ selectedPaper, setSelectedPaper, handleClosePDF }) => {
  return (
    <div className="h-screen flex gap-8">
      <PaperList selectedPaper={selectedPaper} setSelectedPaper={setSelectedPaper} />
      {selectedPaper && (
        <PDFViewer 
          pdfPath={selectedPaper.file}
          title={selectedPaper.title}
          author={selectedPaper.author}
          journal={selectedPaper.journal}
          year={selectedPaper.year}
          onClose={handleClosePDF}
        />
      )}
    </div>
  );
};

const PaperList = ({ selectedPaper, setSelectedPaper }) => {
  return (
    <div className={`flex flex-col transition-all duration-500 ease-in-out ${
      selectedPaper ? 'w-1/4' : 'w-full'
    } h-full pb-16`}>
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {researchPapers.map((paper) => (
          <PaperCard 
            key={paper.id} 
            paper={paper} 
            isSelected={selectedPaper?.id === paper.id}
            onSelect={() => setSelectedPaper(paper)}
          />
        ))}
      </div>
    </div>
  );
};

const TabletMobileLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
      {researchPapers.map((paper) => (
        <PaperCard key={paper.id} paper={paper} isTabletOrMobile />
      ))}
    </div>
  );
};

const PaperCard = ({ paper, isSelected, onSelect, isTabletOrMobile }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = paper.file;
    link.download = `${paper.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 ${
      isSelected 
        ? 'border border-rose-200 bg-rose-50/60' 
        : 'border border-gray-200 hover:border-rose-200 hover:shadow-xl bg-white/60'
    }`}>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
              {paper.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{paper.author}</span>
              <span>•</span>
              <span>{paper.year}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {paper.abstract}
          </p>

          <div className="flex flex-wrap gap-2">
            {paper.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-rose-50/80 text-rose-700 rounded-full text-sm backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {isTabletOrMobile ? (
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={18} />
              Download Paper
            </button>
          ) : (
            <div className="flex justify-end mt-4">
              <button
                onClick={onSelect}
                className="flex items-center text-rose-700 hover:text-rose-900 font-medium transition-all hover:translate-x-1 group"
              >
                View Paper
                <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;