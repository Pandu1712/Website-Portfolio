import React from 'react';

const Page = () => {
  return (
    <section className="text-gray-600 body-font pt-28 max-w-11/12 mx-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gradient-to-r from-indigo-100 to-blue-200 pt-30 mt-20 rounded-2xl mb-20">
        {/* Content Section */}
        <div className="lg:flex-grow my-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center xl:my-10 2xl:my-10 sm:my-30 md:my-10 lg:my-10 space-y-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 shadow-lg px-5 py-3 rounded-md bg-white transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s">
            Prasanna Kumar Panda
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            "Hi, I'm Prasanna Kumar Panda, a passionate Java Full Stack Developer with expertise in building robust and scalable web applications. I have a solid foundation in both front-end and back-end technologies, allowing me to seamlessly integrate user interfaces with powerful server-side functionality. With a deep understanding of Java, Spring Boot, RESTful services, and front-end technologies like HTML, CSS, JavaScript, and modern frameworks like React, I enjoy creating intuitive and performance-driven solutions. I thrive on problem-solving and continuously stay up-to-date with the latest industry trends to deliver high-quality, maintainable code. Let’s build something amazing together!"
          </p>
          <div className="flex justify-center">
            <a
              href="/Contact"
              className="text-justify inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:mt-10 max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img
    className="object-cover object-center rounded-full shadow-2xl transform transition duration-300 ease-in-out hover:scale-105"
    alt="hero"
    src="images/pic.JPG"  // Corrected path
  />
</div>

      </div>
    </section>
  );
};

export default Page;
