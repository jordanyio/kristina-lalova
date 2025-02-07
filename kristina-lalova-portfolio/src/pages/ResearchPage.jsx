import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { researchPapers } from '../data/researchPapers';

const ResearchCard = ({ paper }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100" >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {paper.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {paper.abstract}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {paper.authors.map((author, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800"
              >
                {author}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            <p>{paper.journal} • {paper.year}</p>
            <p className="mt-1">
              Status: <span className={`font-medium ${paper.status === 'Published' ? 'text-green-600' : 'text-amber-600'}`}>
                {paper.status}
              </span>
            </p>
          </div>
        </div>
        <div className='mr-4'>
        <Link 
          to={`/research/${paper.id}`}
          className="ml-4 p-2 text-rose-700 hover:text-rose-800 hover:bg-rose-50 rounded-full transition-colors"
        >
          <ArrowRight size={24} />
        </Link>
        </div>
      </div>
    </div>
  );
};

const ResearchPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8" style={{ zoom: '150%' }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Research Papers</h1>
      <div className="space-y-6">
        {researchPapers.map(paper => (
          <ResearchCard key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;