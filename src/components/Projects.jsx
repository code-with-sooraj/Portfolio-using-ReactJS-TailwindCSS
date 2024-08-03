import React from 'react';
import BIKE from '../assets/bike.png';
import PAYKARO from '../assets/paykaro.png';
import STUDENT from '../assets/student.jpeg';

function ProjectCard({ title, description, imageSrc, techStack, link }) {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className="bg-white border-2 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className='flex justify-center'>
        <img
          src={imageSrc}
          alt={title}
          className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 m-4"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 m-4 text-center">{description}</p>
    
      <p className="text-black font-bold text-center">Technology Stack: <span className='text-blue-500'>{techStack}</span></p>
  
      <div className="flex justify-center pt-5">
        <button 
          onClick={handleButtonClick}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit to GitHub
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Ride Karo',
      description:
        'A user-friendly ride-booking application developed with Java and MySQL. Java AWT and Swing for the application development and MySQL for the database.',
      imageSrc: BIKE,
      techStack: 'JAVA, MySQL',
      link: 'https://github.com/code-with-sooraj/Ride-Karo',
    },
    {
      title: 'PayKaro',
      description:
        'A robust payment application built with ReactJS and Tailwind CSS for a responsive and modern frontend. The backend is powered by ExpressJS, with MongoDB handling data storage and Zod ensuring validation. PayKaro delivers a secure and user-friendly payment experience with a focus on performance and scalability.',
      imageSrc: PAYKARO,
      techStack: ' ReactJS, TailwindCSS, ExpressJS, MongoDB',
      link: 'https://github.com/code-with-sooraj/Paytm',
    },
    {
      title: 'Campus Placement Prediction',
      description:
        'Campus placement prediction involves forecasting the likelihood of students securing job placements based on various factors like academic performance, skills, and extracurricular activities. This can be achieved using machine learning models to analyze historical data and identify patterns, helping institutions and students make informed decisions.',
      imageSrc: STUDENT,
      techStack: 'Python, Machine Learning',
      link: 'https://github.com/code-with-sooraj/Student-placement-prediction'
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
