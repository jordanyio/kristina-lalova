import { useState } from "react";
import { X, Download } from "lucide-react";
import FinanceBackground from "../FinanceBackground";

const researchPapers = [
  { 
    id: 1, 
    title: "AI in Healthcare: Transforming Patient Care through Machine Learning",
    author: "John Doe",
    year: 2023,
    journal: "Nature Digital Medicine",
    abstract: "This paper explores the revolutionary impact of artificial intelligence on healthcare delivery, focusing on early disease detection and personalized treatment plans.",
    file: "/papers/predicting-bankruptcy.pdf",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  { 
    id: 2, 
    title: "Quantum Computing Advances: Breaking Computational Barriers",
    author: "Alice Smith",
    year: 2022,
    journal: "Quantum Science and Technology",
    abstract: "A comprehensive examination of recent breakthroughs in quantum computing, detailing new approaches to qubit stability and error correction.",
    file: "papers/predicting-bankruptcy.pdf",
    tags: ["Quantum Computing", "Physics", "Computer Science"]
  },
  { 
    id: 3, 
    title: "Blockchain Security: Advanced Cryptographic Protocols",
    author: "Bob Johnson",
    year: 2021,
    journal: "IEEE Security & Privacy",
    abstract: "An in-depth analysis of emerging cryptographic protocols in blockchain technology, focusing on enhanced security measures and scalability solutions.",
    file: "papers/predicting-bankruptcy.pdf",
    tags: ["Blockchain", "Cryptography", "Security"]
  },
];

export default function ResearchPaperViewer() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handleClosePDF = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="h-[calc(96vh-4rem)] mt-16">
        <FinanceBackground />
      <div className={`h-full flex gap-6 p-6 transition-all duration-300 ease-in-out ${
        selectedPaper ? '' : 'max-w-5xl mx-auto'
      }`}>
        {/* Paper List */}
        <div className={`flex flex-col transition-all duration-300 ease-in-out ${
          selectedPaper ? 'w-1/3' : 'w-full'
        }`}>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Research Papers</h1>
            <p className="text-gray-600 mt-1">Select a paper to view its contents</p>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className={`bg-white rounded-xl shadow-sm border transition-all duration-200 ${
                  selectedPaper?.id === paper.id
                    ? 'ring-2 ring-blue-500 border-transparent'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                          {paper.title}
                        </h2>
                        <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                          <span>{paper.author}</span>
                          <span>•</span>
                          <span>{paper.journal}</span>
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
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setSelectedPaper(paper)}
                      className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Paper
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Viewer */}
        {selectedPaper && (
          <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selectedPaper.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedPaper.author} • {selectedPaper.journal} • {selectedPaper.year}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedPaper.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </a>
                <button
                  onClick={handleClosePDF}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <iframe
                src={selectedPaper.file}
                className="w-full h-full"
                title={selectedPaper.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}