import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { researchPapers } from '../data/researchPapers';

const PaperDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const paper = researchPapers.find((p) => p.id === parseInt(id));

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Paper not found</h2>
          <button
            onClick={() => navigate('/research')}
            className="text-rose-700 hover:text-rose-800"
          >
            Return to Research Papers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-8">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side - Paper Metadata */}
        <div 
          className="w-full lg:w-80 bg-gray-50 border-b lg:border-r border-gray-200 overflow-y-auto shrink-0" 
          style={{ zoom: '150%' }}
        >
          {/* Back button */}
          <div className="p-4 border-b border-gray-200 bg-white">
            <button
              onClick={() => navigate('/research')}
              className="flex items-center text-gray-600 hover:text-rose-700 transition-colors text-sm"
            >
              <div>
                <ArrowLeft className="mr-2" size={16} />
              </div>
              Back to Research
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h1>
              <div className="flex flex-wrap gap-2">
                {paper.authors.map((author, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-gray-900">Abstract</h2>
              <p className="text-sm text-gray-600">{paper.abstract}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Journal:</span>
                <span className="text-gray-900">{paper.journal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Year:</span>
                <span className="text-gray-900">{paper.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Status:</span>
                <span
                  className={
                    paper.status === 'Published' ? 'text-green-600' : 'text-amber-600'
                  }
                >
                  {paper.status}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={paper.pdfPath}
                download
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-rose-700 bg-rose-50 rounded-md hover:bg-rose-100 transition-colors"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - PDF Viewer */}
        <div className="flex-1 bg-gray-900">
          <div className="w-full h-[calc(100vh-14rem)] lg:h-[calc(100vh-4rem)]">
            <iframe
              src={`${paper.pdfPath}#view=FitW&scrollbar=1&toolbar=0&navpanes=0&statusbar=0`}
              title={paper.title}
              className="w-full h-full border-none"
              style={{
                backgroundColor: 'white',
                overflow: 'auto'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperDetailPage;