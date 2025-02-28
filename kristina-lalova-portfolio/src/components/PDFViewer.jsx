import React from 'react';
import { Download, X } from "lucide-react";

const PDFViewer = ({ pdfPath, title, author, journal, year, onClose }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-1 flex flex-col bg-white/70 backdrop-blur rounded-lg shadow-xl border border-gray-200 overflow-hidden pdf-container transform transition-all duration-500 ease-in-out animate-fadeIn relative z-20">
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
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-rose-50/70 backdrop-blur">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          {author && journal && year && (
            <p className="text-sm text-gray-600 mt-1">
              {author} • {journal} • {year}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors shadow-lg hover:shadow-xl"
          >
            <Download size={18} />
            Download PDF
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100/80 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>
      
      <div className="flex-1 h-[calc(100vh-14rem)]">
        <iframe
          src={pdfPath}
          className="w-full h-full bg-white"
          title={title}
        />
      </div>
    </div>
  );
};

export default PDFViewer;