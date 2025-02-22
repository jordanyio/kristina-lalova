import React from "react";
import { motion } from "framer-motion";

const MediaMentions = ({ isLoaded }) => {
  const mentions = [
    { publication: "ECGI Blog", year: "2025", title: "Scoring Profits? The Impact of Private Equity Investments on Soccer Clubs", link: "https://www.ecgi.global/publications/blog/scoring-profits-the-impact-of-private-equity-investments-on-soccer-clubs" },
    { publication: "PE Sports", year: "2024", title: "Post | Feed", link: "https://www.linkedin.com/feed/update/urn:li:activity:7217158416031477760/" },
    { publication: "Reorg Blog", year: "2024", title: "Academic Roundup 2023-2024 With the Harvard Law School Bankruptcy Roundtable Octus", link: "https://octus.com/resources/articles/academic-roundup-2024-harvard-law-school-bankruptcy/" },
    { publication: "Oxford Business Law Blog", year: "2024", title: "Predicting Bankruptcy: Ask the Employees", link: "https://blogs.law.ox.ac.uk/oblb/blog-post/2024/04/predicting-bankruptcy-ask-employees" },
    { publication: "Harvard Law School Bankruptcy Roundtable Academic Roundup", year: "2024", title: "Academic Roundup 2023-2024 with Reorg", link: "https://bankruptcyroundtable.law.harvard.edu/2024/06/04/academic-roundup-2023-2024-with-reorg/" },
    { publication: "Harvard Law School Bankruptcy Roundtable", year: "2024", title: "Predicting Bankruptcy: Ask the Employees", link: "https://bankruptcyroundtable.law.harvard.edu/2024/03/12/predicting-bankruptcy-ask-the-employees/" },
  ];

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gradient-to-b from-rose-50/90 to-white/90rose-50/90">
        <section className="w-full max-w-7xl mx-auto px-4 py-16 ">
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerAnimation}
        className="relative bg-[rgba(250,243,224,0.35)] rounded-lg shadow-sm px-6 py-8 border-l-4 border-gray-400"
      >
        {/* Left-side "binding" effect */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gray-400 rounded-l-lg"></div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Research Media Mentions</h2>

        <ul className="space-y-6">
          {mentions.map((mention, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              className="relative flex flex-col border-l-2 border-dashed border-gray-500 pl-6 pr-4 py-4"
            >
              {/* Top Section (Publication & Title) */}
              <div>
                <h3 className="font-semibold text-gray-800">{mention.publication}</h3>
                <p className="text-gray-700 italic">{mention.title}</p>
              </div>

              {/* Bottom Section (Year & Read More) */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-600">{mention.year}</span>
                <a
                  href={mention.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
    </div>
  );
};

export default MediaMentions;
