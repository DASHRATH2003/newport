import React, { useState, useEffect } from 'react';
import resumePDF from '../assets/Professionalresume (4).pdf';

function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // This ensures the PDF is loaded when the component mounts
    setIsLoading(true);

    // Set a small timeout to ensure the component is fully mounted
    const timer = setTimeout(() => {
      setPdfUrl(resumePDF);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-dark mb-4">My Resume</h1>
          <p className="text-lg text-gray-600">View and download my professional resume</p>
        </div>
      </div>

      {/* Resume Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4 md:mb-0">Professional Resume</h2>
              <div className="flex flex-wrap gap-3">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"></div>
                    <span className="text-gray-600">Loading resume...</span>
                  </div>
                ) : (
                  <>
                    <a
                      href={pdfUrl}
                      download="Dashrath_Resume.pdf"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Download PDF
                    </a>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View PDF in New Tab
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* PDF Embed */}
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
                  <p className="text-gray-600">Loading resume...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <p className="text-lg text-gray-600 mb-6">
                    For the best viewing experience, please use one of the options below to view or download the resume.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View PDF in New Tab
                    </a>
                    <a
                      href={pdfUrl}
                      download="Dashrath_Resume.pdf"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              )}

              {/* Fallback for browsers that don't support iframe or PDF embedding */}
              <noscript>
                <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-8 text-center">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <p className="text-lg font-medium text-gray-700 mb-2">Unable to display PDF</p>
                  <p className="text-gray-500 mb-4">Your browser might not support embedded PDFs. Please download the file instead.</p>
                  <a
                    href={pdfUrl}
                    download="Dashrath_Resume.pdf"
                    className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
                  >
                    Download PDF
                  </a>
                </div>
              </noscript>
            </div>
          </div>

          {/* Resume Content in HTML Format */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Resume Overview</h2>

            {/* Contact Information */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-dark mb-2">Dashrath</h1>
              <p className="text-lg text-gray-600 mb-2">Full Stack Developer</p>
              <div className="flex justify-center space-x-4 text-gray-600">
                <span>📧 email@example.com</span>
                <span>📱 (123) 456-7890</span>
                <span>📍 City, Country</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2 mb-4">Professional Summary</h3>
              <p className="text-gray-700">
                Passionate and detail-oriented Full Stack Developer with experience in building responsive web applications using modern technologies.
                Strong problem-solving skills and ability to work effectively in team environments. Committed to writing clean, maintainable code and
                staying current with emerging technologies and best practices.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2 mb-4">Work Experience</h3>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-semibold text-dark">Junior Full Stack Developer</h4>
                  <span className="text-gray-500">2025 - Present</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">Innomatrics Tech.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Developed and maintained client websites using React and Node.js</li>
                  <li>Collaborated with design team to implement responsive UI components</li>
                  <li>Optimized database queries resulting in 30% faster load times</li>
                  <li>Participated in code reviews and implemented best practices</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-semibold text-dark">Web Development Intern</h4>
                  <span className="text-gray-500">2024</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">NexisWorx Technology (Delhi)</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Assisted in developing front-end features using React</li>
                  <li>Created and maintained documentation for codebase</li>
                  <li>Participated in daily stand-ups and sprint planning</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2 mb-4">Education</h3>

              <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-semibold text-dark">Bachelor of Computer Science</h4>
                  <span className="text-gray-500">2020 - 2024</span>
                </div>
                <p className="text-gray-700">Sagar institute of resrarch and technology (bhopal)</p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-semibold text-dark">Full Stack Web Development Bootcamp</h4>
                  <span className="text-gray-500">2022</span>
                </div>
                <p className="text-gray-700">Sheryians Coding School</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2 mb-4">Technical Skills</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-dark mb-2">Frontend</h4>
                  <p className="text-gray-700">HTML5, CSS3, JavaScript, React, Redux, Tailwind CSS, Bootstrap</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-dark mb-2">Backend</h4>
                  <p className="text-gray-700">Node.js, Express, Python, Django, RESTful APIs</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-dark mb-2">Database</h4>
                  <p className="text-gray-700">MongoDB, MySQL, PostgreSQL, Firebase</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-dark mb-2">Tools & Deployment</h4>
                  <p className="text-gray-700">Git, GitHub, Docker, AWS, Heroku, Netlify, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
