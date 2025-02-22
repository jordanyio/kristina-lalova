import React from 'react';
import ResearchInterests from './ResearchInterests';

const ProfileSection = ({ isLoaded }) => {
  return (
    <section className="relative py-16 w-full">
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block absolute top-0 right-12 z-10">
          <div className={`relative ${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
            <div className="absolute -inset-3 bg-rose-700 rounded-full blur-md opacity-20"></div>
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img
                src="/propho.jpg"
                alt="Kristina's Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium">
              Ph.D.
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center lg:items-start page-transition ${
          isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'
        }`}>
          {/* Mobile Profile Image */}
          <div className={`lg:hidden flex justify-center -mt-12 mb-8 ${
            isLoaded ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            <div className={`relative ${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
              <div className="absolute -inset-3 bg-rose-700 rounded-full blur-md opacity-20"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                <img
                  src="/propho.jpg"
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
          <div className={`flex flex-col space-y-8 text-center lg:text-left lg:max-w-2xl ${
            isLoaded ? 'animate-fadeInUp delay-300' : 'opacity-0'
          }`}>
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">Dr. Kristina Lalova</h1>
              <h2 className="text-2xl sm:text-3xl text-rose-700 font-light">
                Fixed-Term Assistant Professor of Finance
              </h2>
              <h3 className="text-xl sm:text-2xl text-gray-600 mt-2">
                Eli Broad College of Business, Michigan State University
              </h3>
            </div>
            <div className="w-32 h-2 bg-rose-700 rounded-full mx-auto lg:mx-0"></div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                I am a finance scholar exploring the intricate relationships between labor dynamics
                and financial markets. My research examines how workforce trends influence corporate
                decision-making, with a specific emphasis on how employee morale shapes merger and
                acquisition trajectories, bankruptcy predictions, and organizational performance
                across different sectors, including specialized domains like European soccer.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Before joining Michigan State University in 2023, I earned my Ph.D. in Finance from
                the University of Connecticut, where I developed novel analytical frameworks for
                understanding labor-finance interactions. My academic journey began at Drexel
                University, where I graduated with a B.S.B.A. in Finance and Accounting as part of
                the prestigious Drexel Global Scholar program—an experience that shaped my
                international perspective on financial systems.
              </p>
            </div>

            {/* ResearchInterests Section */}
            <div className="w-full">
              <ResearchInterests isLoaded={isLoaded} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
