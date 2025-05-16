import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';
import AnimatedSkillIcon from './AnimatedSkillIcon';

// Import skill icons
import reactIcon from '../assets/skills/react.svg';
import nodeIcon from '../assets/skills/node.svg';
import htmlIcon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css3.svg';
import jsIcon from '../assets/skills/javascript.svg';
import mongodbIcon from '../assets/skills/mongodb.svg';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-dark mb-4">About Me</h1>
          <p className="text-lg text-gray-600">Get to know more about me and my background</p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full opacity-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-2/3 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-3xl font-bold text-dark mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Who I Am
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Hello! I'm Dashrath, a passionate Full Stack Developer with a strong foundation in web technologies and a
                keen eye for creating user-friendly applications. My journey in technology began with a curiosity about
                how websites work, which led me to dive deep into the world of programming.
              </motion.p>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I specialize in building responsive, efficient, and scalable web applications using modern frameworks
                and technologies. My approach combines technical expertise with creative problem-solving to deliver
                solutions that not only meet but exceed client expectations.
              </motion.p>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community forums.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary">Bachelor of Computer Science</h3>
                <span className="text-gray-500">2020 - 2024</span>
              </div>
              <p className="text-gray-700 mb-2">Sagar institute of reaearch and technology (Bhopal)</p>
              <p className="text-gray-600">
                Studied core computer science concepts including algorithms, data structures,
                software engineering principles, and database management. Graduated with honors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary">Full Stack Web Development Bootcamp</h3>
                <span className="text-gray-500">2022</span>
              </div>
              <p className="text-gray-700 mb-2">Sage summer school</p>
              <p className="text-gray-600">
                Intensive 12-week program focused on modern web development technologies including
                React, Node.js, and database integration. Completed several real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 border-l-4 border-primary pl-6 py-2">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-dark">Junior Full Stack Developer</h3>
                <span className="text-gray-500">2025- Present</span>
              </div>
              <p className="text-gray-700 mb-2">Innomatrics Tech.(Bangalore)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Developed and maintained client websites using React and Node.js</li>
                <li>Collaborated with design team to implement responsive UI components</li>
                <li>Optimized database queries resulting in 30% faster load times</li>
                <li>Participated in code reviews and implemented best practices</li>
              </ul>
            </div>

            <div className="mb-8 border-l-4 border-primary pl-6 py-2">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-dark">Web Development Intern</h3>
                <span className="text-gray-500"> 2024</span>
              </div>
              <p className="text-gray-700 mb-2">Nexisworx Technology (Delhi)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Assisted in developing front-end features using React</li>
                <li>Created and maintained documentation for codebase</li>
                <li>Participated in daily stand-ups and sprint planning</li>
                <li>Built a dashboard for internal analytics tracking</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6 py-2">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-dark">Freelance Web Developer</h3>
                <span className="text-gray-500">2024 - 2025</span>
              </div>
              <p className="text-gray-700 mb-2">Self-employed</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Designed and developed websites for small businesses</li>
                <li>Implemented e-commerce solutions using Shopify and WooCommerce</li>
                <li>Provided ongoing maintenance and support for clients</li>
                <li>Managed client relationships and project timelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-dark mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Technologies
          </motion.h2>

          {/* Featured Skills with Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedSkillIcon icon={htmlIcon} name="HTML5" delay={0.1} />
            <AnimatedSkillIcon icon={cssIcon} name="CSS3" delay={0.2} />
            <AnimatedSkillIcon icon={jsIcon} name="JavaScript" delay={0.3} />
            <AnimatedSkillIcon icon={reactIcon} name="React" delay={0.4} />
            <AnimatedSkillIcon icon={nodeIcon} name="Node.js" delay={0.5} />
            <AnimatedSkillIcon icon={mongodbIcon} name="MongoDB" delay={0.6} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Frontend */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Tailwind CSS', 'Bootstrap', 'TypeScript'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'PHP'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Tools & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker', 'AWS', 'Heroku', 'Netlify', 'Vercel', 'CI/CD'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Design */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'Photoshop', 'Responsive Design', 'UI/UX Principles'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Agile Methodology'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts & Hobbies Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-dark mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fun Facts & Hobbies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                🌍
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Travel Enthusiast</h3>
              <p className="text-gray-600">Visited 15 countries across 3 continents. My goal is to visit at least 30 countries before I turn 35.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
              >
                📚
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Avid Reader</h3>
              <p className="text-gray-600">I read at least one book per month. My favorite genres are science fiction, technology, and psychology.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
              >
                🎸
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Amateur Guitarist</h3>
              <p className="text-gray-600">I've been playing guitar for 5 years. I enjoy playing acoustic covers of popular songs.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
              >
                🏃‍♂️
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Fitness Enthusiast</h3>
              <p className="text-gray-600">I run 5km three times a week and have completed two half-marathons.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
              >
                🍳
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Home Chef</h3>
              <p className="text-gray-600">I love experimenting with recipes from different cuisines. Italian and Thai are my specialties.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-primary"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
              >
                🎮
              </motion.div>
              <h3 className="text-xl font-semibold text-dark mb-2">Casual Gamer</h3>
              <p className="text-gray-600">I enjoy strategy and puzzle games that challenge my problem-solving skills.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
