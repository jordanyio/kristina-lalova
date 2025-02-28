import React from 'react';

const SocialLinks = ({ isLoaded }) => {
  return (
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
          
          <a href="https://www.linkedin.com/in/kristinalalova/" className="flex flex-col items-center group">
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
  );
};

export default SocialLinks;