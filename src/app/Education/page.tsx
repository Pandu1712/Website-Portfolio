import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="flex items-center justify-center">
        {/* Added padding to ensure visibility on small screens */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 pt-70 sm:pt-50 px-6 text-center">Educational Details</h1>
      </div>

      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex flex-col sm:flex-row items-start sm:items-center relative py-8 sm:py-10 md:w-2/3 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center w-1 bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center relative z-10 text-xs sm:text-sm font-semibold">1</div>
          <div className="sm:pl-8 pl-6 sm:mt-0 mt-6 flex-grow sm:flex-row flex-col sm:items-center items-start">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center mb-4 sm:mb-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="font-medium title-font text-gray-900 text-xl mb-2">Master Of Computer Application</h2>
              <p className="leading-relaxed text-sm sm:text-base">Gayathri Vidhya Parishad PG and Degree College in Visakhapatnam offers a comprehensive Master of Computer Applications (MCA) program, designed to equip students with advanced skills in computer science and software development. The college provides a robust academic environment to foster innovation and career growth in the IT industry.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center relative py-8 sm:py-10 md:w-2/3 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center w-1 bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center relative z-10 text-xs sm:text-sm font-semibold">2</div>
          <div className="sm:pl-8 pl-6 sm:mt-0 mt-6 flex-grow sm:flex-row flex-col sm:items-center items-start">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center mb-4 sm:mb-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="font-medium title-font text-gray-900 text-xl mb-2">Bachelor Of Computer Science</h2>
              <p className="leading-relaxed text-sm sm:text-base">Shirdi Sai Degree College in Palasa offers a Bachelor of Computer Science (BSc) program, providing students with a solid foundation in computer science principles and applications. The college fosters an engaging academic environment to prepare students for successful careers in the growing tech industry.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center relative py-8 sm:py-10 md:w-2/3 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center w-1 bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center relative z-10 text-xs sm:text-sm font-semibold">3</div>
          <div className="sm:pl-8 pl-6 sm:mt-0 mt-6 flex-grow sm:flex-row flex-col sm:items-center items-start">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center mb-4 sm:mb-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="font-medium title-font text-gray-900 text-xl mb-2">Intermediate</h2>
              <p className="leading-relaxed text-sm sm:text-base">Narayanadora College in Palasa offers an Intermediate program with a focus on the MPC (Mathematics, Physics, and Chemistry) group. This course provides students with a strong foundation in science, preparing them for higher education and careers in engineering, research, and other technical fields.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center relative py-8 sm:py-10 md:w-2/3 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center w-1 bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center relative z-10 text-xs sm:text-sm font-semibold">4</div>
          <div className="sm:pl-8 pl-6 sm:mt-0 mt-6 flex-grow sm:flex-row flex-col sm:items-center items-start">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center mb-4 sm:mb-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="font-medium title-font text-gray-900 text-xl mb-2">SSC</h2>
              <p className="leading-relaxed text-sm sm:text-base">Sri Sai Sirisha High School in Chinnabadam offers a comprehensive SSC (Secondary School Certificate) program, focusing on building a strong academic foundation for students. The school prepares students for their board exams while fostering holistic development for future educational pursuits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
