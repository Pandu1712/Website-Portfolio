import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font pt-35">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">My Skill Set</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Java Full Stack</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Java Full Stack refers to the development of both the front-end and back-end of web applications using Java technologies. It involves working with frameworks like Spring, Hibernate, and JavaScript libraries to build scalable, dynamic, and interactive web solutions.</p>
            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">FrontEnd</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Frontend development involves creating the visual and interactive aspects of a website or application. Using technologies like HTML for structure, CSS for styling, JavaScript for functionality, and frameworks like React and Next.js for building dynamic and efficient user interfaces, frontend developers bring designs to life and ensure seamless user experiences.</p>
            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">BackEnd</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Backend development using MySQL, Spring, Spring Boot, and Java focuses on building the server-side logic and managing data. MySQL is used for database management, while Spring and Spring Boot provide powerful frameworks for creating robust, scalable, and maintainable backend services, with Java serving as the core programming language for implementing business logic and APIs.</p>
           {/*  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default page