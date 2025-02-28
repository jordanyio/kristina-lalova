import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Dr. Kristina Lalova</h2>
            <p className="text-gray-600 mt-2">Fixed-Term Assistant Professor of Finance</p>
            <p className="text-gray-600">Eli Broad College of Business, Michigan State University</p>
          </div>
          <div className="flex gap-8">
            <a href="mailto:lalovakr@msu.edu" className="text-rose-700 hover:text-rose-800 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/kristinalalova/" className="text-rose-700 hover:text-rose-800 transition-colors">LinkedIn</a>
            <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3050436" className="text-rose-700 hover:text-rose-800 transition-colors">SSRN</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center md:text-left text-gray-500">
          © 2025 Dr. Kristina Lalova. All rights reserved. <span className='ml-8'>Built by Reactive Web Services</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;