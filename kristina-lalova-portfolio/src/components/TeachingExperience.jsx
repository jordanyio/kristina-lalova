import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TeachingExperience = ({ isLoaded }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setHasMounted(true);
    }
  }, [isLoaded]);

  const experiences = [
    {
      institution: "Michigan State University",
      roles: [
        {
          title: "Supervisor for Independent Study Class",
          courses: [
            "PE Investments in Soccer Clubs (Spring 2024, Brennan Cimpeanu)",
            "Volkswagen's Valuation (Spring 2024, Luke Evanoff)",
            "U.S. Congress Members' Investments (Summer 2024, Brennan Cimpeanu)",
          ],
        },
        {
          title: "Instructor of Record: FI 312 – Introduction to Investments",
          courses: [
            "Fall 2023 (3 sections) – Avg. Quality of Faculty Member: 4.0/5.0",
            "Fall 2024 (3 sections)",
          ],
        },
      ],
    },
    {
      institution: "University of Connecticut",
      roles: [
        {
          title: "Instructor of Record: FNCE 3101 – Financial Management",
          semesters: [
            "Fall 2019 (4.24/5.0)",
            "Fall 2020 (4.86/5.0)",
            "Fall 2021 (4.83/5.0)",
            "Spring 2023 (4.40/5.0)",
          ],
        },
        {
          title: "Teaching Assistant: FNCE 3101",
          semesters: [
            "Spring 2021",
            "Spring 2022",
            "Fall 2022",
          ],
        },
      ],
      feedback: [
        "Professor Lalova is an absolute gem! The sweetest most caring professor. Any questions I had she was super happy to answer. Having an index card during exams was so helpful to actually learning...",
        "This instructor allowed us to become interested in the material by encouraging us to do well in her class. She was very supportive, helpful, and kind. Definitely one of the best professors...",
        "I appreciated Professor Lalova's care for us as students, asking for our input before making certain decisions. She made herself very accessible to us...",
      ],
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.2 
      } 
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-16 relative z-10">
      {/* Semi-transparent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-rose-50/90" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Experience</h2>
          <div className="w-24 h-1 bg-rose-700 rounded-full"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          variants={containerAnimation}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden shadow-lg"
            >
              {/* Institution Header */}
              <div className="bg-white/80 border-b border-gray-100 px-8 py-5">
                <h3 className="text-2xl font-semibold text-gray-800">{experience.institution}</h3>
              </div>

              {/* Content Section */}
              <div className="bg-white/60 p-8">
                <div className="space-y-6">
                  {experience.roles.map((role, idx) => (
                    <div key={idx} className="rounded-lg">
                      <h4 className="text-lg font-medium text-rose-700 mb-3">{role.title}</h4>
                      <ul className="space-y-2 ml-5">
                        {role.courses && role.courses.map((course, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{course}</span>
                          </li>
                        ))}
                        {role.semesters && role.semesters.map((semester, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{semester}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Student Feedback Section */}
                {experience.feedback && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Student Feedback</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {experience.feedback.map((feedback, i) => (
                        <div 
                          key={i} 
                          className="bg-white border border-rose-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <p className="text-gray-600 italic text-sm leading-relaxed">"{feedback}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingExperience;