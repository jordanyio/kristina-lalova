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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 relative bg-rose-50 rounded-lg mb-4">
      <motion.div
        initial="hidden"
        animate={hasMounted ? "visible" : "hidden"}
        variants={containerAnimation}
        className="px-6 py-8 relative z-10"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Teaching Experience</h2>

        <ul className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.li
              key={index}
              variants={itemAnimation}
              className="relative flex flex-col mb-8"
            >
              {/* Institution */}
              <h3 className="font-semibold text-gray-900 text-2xl mb-4">{experience.institution}</h3>

              {/* Roles */}
              <div className="space-y-6">
                {experience.roles.map((role, idx) => (
                  <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-medium text-gray-800">{role.title}</h4>
                    <ul className="text-sm text-gray-600 mt-2 list-inside">
                      {role.courses && role.courses.map((course, i) => (
                        <li key={i}>- {course}</li>
                      ))}
                      {role.semesters && role.semesters.map((semester, i) => (
                        <li key={i}>- {semester}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Student Feedback */}
              {experience.feedback && (
                <div className="bg-white mt-6 p-6 rounded-lg shadow-lg">
                  <h4 className="font-medium text-gray-800 text-lg">Student Feedback:</h4>
                  <ul className="text-sm text-gray-600 space-y-4">
                    {experience.feedback.map((feedback, i) => (
                      <li key={i} className="italic">"{feedback}"</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default TeachingExperience;
