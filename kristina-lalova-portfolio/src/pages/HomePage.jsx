import { useState, useEffect } from "react";
import { ArrowRight, Download, X } from "lucide-react";

// Research paper data
const researchPapers = [
  { 
    id: 1, 
    title: "AI in Healthcare: Transforming Patient Care through Machine Learning",
    author: "Kristina Smith",
    year: 2023,
    journal: "Nature Digital Medicine",
    abstract: "This paper explores the revolutionary impact of artificial intelligence on healthcare delivery, focusing on early disease detection and personalized treatment plans.",
    file: "/papers/predicting-bankruptcy.pdf",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  { 
    id: 2, 
    title: "Quantum Computing Advances: Breaking Computational Barriers",
    author: "Kristina Smith",
    year: 2022,
    journal: "Quantum Science and Technology",
    abstract: "A comprehensive examination of recent breakthroughs in quantum computing, detailing new approaches to qubit stability and error correction.",
    file: "papers/predicting-bankruptcy.pdf",
    tags: ["Quantum Computing", "Physics", "Computer Science"]
  },
  { 
    id: 3, 
    title: "Blockchain Security: Advanced Cryptographic Protocols",
    author: "Kristina Smith",
    year: 2021,
    journal: "IEEE Security & Privacy",
    abstract: "An in-depth analysis of emerging cryptographic protocols in blockchain technology, focusing on enhanced security measures and scalability solutions.",
    file: "papers/predicting-bankruptcy.pdf",
    tags: ["Blockchain", "Cryptography", "Security"]
  },
];

export default function HomePage() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is standard tablet breakpoint
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleClosePDF = () => {
    setSelectedPaper(null);
  };

  return (
    <div className={`bg-gradient-to-b from-white to-rose-50 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <style jsx="true">{`
        .page-transition {
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-out;
        }
        
        .slide-up {
          transform: translateY(0);
        }
        
        .slide-up-hidden {
          transform: translateY(20px);
        }
      `}</style>
      {/* Profile Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col lg:flex-row gap-16 items-center page-transition ${isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'}`}>
            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end flex-shrink-0 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
                              <div className={`relative ${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
                <div className="absolute -inset-3 bg-rose-700 rounded-full blur-md opacity-20"></div>
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                  {/* Replace with your profile image */}
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="Kristina's Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium">
                  Ph.D.
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className={`flex flex-col space-y-8 text-center lg:text-left flex-1 ${isLoaded ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">Dr. Kristina</h1>
                <h2 className="text-2xl sm:text-3xl text-rose-700 font-light">Fixed-Term Assistant Professor of Finance</h2>
                <h3 className="text-xl sm:text-2xl text-gray-600 mt-2">Eli Broad College of Business, Michigan State University</h3>
              </div>

              <div className="w-32 h-2 bg-rose-700 rounded-full mx-auto lg:mx-0"></div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  I am a finance scholar exploring the intricate relationships between labor dynamics and financial markets. 
                  My research examines how workforce trends influence corporate decision-making and how financial institutions 
                  respond to evolving labor landscapes. With a focus on empirical methods, I investigate the hidden mechanisms 
                  that drive market behaviors in today's complex economic environment.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Before joining Michigan State University in 2023, I earned my Ph.D. in Finance from the University of Connecticut, 
                  where I developed novel analytical frameworks for understanding labor-finance interactions. My academic journey began 
                  at Drexel University, where I graduated with a B.S.B.A. in Finance and Accounting as part of the prestigious 
                  Drexel Global Scholar program—an experience that shaped my international perspective on financial systems.
                </p>
              </div>

              {/* Research Interests Visualization */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Focus Areas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {title: "Labor & Finance", description: "Workforce dynamics and market interactions"},
                    {title: "Corporate Finance", description: "Capital structure and governance impacts"},
                    {title: "Behavioral Finance", description: "Decision-making biases in markets"},
                    {title: "Labor Markets", description: "Employment trends and financial consequences"},
                    {title: "Private Equity", description: "Investment strategies and performance metrics"},
                    {title: "Empirical Methods", description: "Data-driven approaches to financial research"}
                  ].map((area, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-rose-700 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white border border-rose-100 rounded-lg p-6 text-center hover:shadow-md transition-all">
                        <div className="text-rose-700 font-semibold text-lg">{area.title}</div>
                        <div className="mt-2 text-gray-600">{area.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll indicator with directional lines */}
      <div className="relative py-6 flex justify-center overflow-hidden">
        <div className="absolute left-0 right-0 flex justify-center">
          <div className="w-px h-16 bg-rose-200"></div>
        </div>
        <div className="flex space-x-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-500 mt-8"></div>
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-500 mt-8"></div>
        </div>
      </div>
      
      {/* Social/Academic Links Section */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-wrap justify-center gap-8 sm:gap-16 page-transition ${isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'}`} style={{ transitionDelay: '100ms' }}>
            <a href="mailto:lalovakr@msu.edu" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-700">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="mt-2 text-gray-700 group-hover:text-rose-700 transition-colors">Email</span>
            </a>
            
            <a href="#" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-700">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span className="mt-2 text-gray-700 group-hover:text-rose-700 transition-colors">LinkedIn</span>
            </a>
            
            <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3050436" className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-700">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              </div>
              <span className="mt-2 text-gray-700 group-hover:text-rose-700 transition-colors">SSRN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className={`mx-auto px-6 ${selectedPaper ? 'max-w-[1400px] transition-all duration-500' : 'max-w-7xl transition-all duration-300'}`}>
          <div className={`mb-12 page-transition ${isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Papers</h2>
            <div className="w-24 h-1 bg-rose-700 rounded-full"></div>
            <p className="text-xl text-rose-700 font-light mt-6">
              {isMobile ? "Select a paper to download" : "Select a paper to view its contents"}
            </p>
          </div>
          
          {/* Desktop/Tablet Layout */}
          {!isMobile && (
            <div className="h-full flex gap-8">
              {/* Paper List */}
              <div className={`flex flex-col transition-all duration-500 ease-in-out ${
                selectedPaper ? 'w-1/4' : 'w-full'
              }`}>
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                  {researchPapers.map((paper, index) => (
                    <div
                      key={paper.id}
                      className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${
                        selectedPaper?.id === paper.id
                          ? 'border border-rose-200 bg-rose-50/50'
                          : 'border border-gray-200 hover:border-rose-200 hover:shadow'
                      }`}
                    >
                      <div className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                              {paper.title}
                            </h2>
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
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
                                className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex justify-end mt-4">
                            <button
                              onClick={() => setSelectedPaper(paper)}
                              className="flex items-center text-rose-700 hover:text-rose-900 font-medium transition-all hover:translate-x-1 group"
                            >
                              View Paper
                              <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Viewer */}
              {selectedPaper && (
                <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden pdf-container transform transition-all duration-500 ease-in-out animate-fadeIn"
                     style={{ 
                       animation: 'fadeIn 0.5s ease-out forwards',
                     }}>
                  <style jsx="true">{`
                    @keyframes fadeIn {
                      from { 
                        opacity: 0;
                        transform: translateY(10px);
                      }
                      to { 
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-rose-50">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{selectedPaper.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedPaper.author} • {selectedPaper.journal} • {selectedPaper.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // Create a link element
                          const link = document.createElement('a');
                          link.href = selectedPaper.file;
                          // Specify the filename for download
                          link.download = `${selectedPaper.title.replace(/\s+/g, '_')}.pdf`;
                          // Append to the document temporarily
                          document.body.appendChild(link);
                          // Trigger click programmatically
                          link.click();
                          // Clean up
                          document.body.removeChild(link);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors shadow-sm hover:shadow-md"
                      >
                        <Download size={18} />
                        Download PDF
                      </button>
                      <button
                        onClick={handleClosePDF}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 h-[calc(100vh-14rem)]">
                    <iframe
                      src={selectedPaper.file}
                      className="w-full h-full"
                      title={selectedPaper.title}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Mobile Layout */}
          {isMobile && (
            <div className="grid grid-cols-1 gap-6">
              {researchPapers.map((paper, index) => (
                <div
                  key={paper.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-rose-200 hover:shadow transition-all duration-200"
                >
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                          {paper.title}
                        </h2>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
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
                            className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // Create a link element
                          const link = document.createElement('a');
                          link.href = paper.file;
                          // Specify the filename for download
                          link.download = `${paper.title.replace(/\s+/g, '_')}.pdf`;
                          // Append to the document temporarily
                          document.body.appendChild(link);
                          // Trigger click programmatically
                          link.click();
                          // Clean up
                          document.body.removeChild(link);
                        }}
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors shadow-sm hover:shadow-md"
                      >
                        <Download size={18} />
                        Download Paper
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Dr. Kristina</h2>
              <p className="text-gray-600 mt-2">Fixed-Term Assistant Professor of Finance</p>
              <p className="text-gray-600">Eli Broad College of Business, Michigan State University</p>
            </div>
            <div className="flex gap-8">
              <a href="mailto:lalovakr@msu.edu" className="text-rose-700 hover:text-rose-800 transition-colors">Email</a>
              <a href="#" className="text-rose-700 hover:text-rose-800 transition-colors">LinkedIn</a>
              <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3050436" className="text-rose-700 hover:text-rose-800 transition-colors">SSRN</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center md:text-left text-gray-500">
            © 2025 Dr. Kristina. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}