import React from 'react';
import './works.css';

const Works = () => {
  return (
    <div id="projects-section">
      <h2>Projects</h2>
      <p>Explore some of the projects I've worked on.</p>

      <div className="project-card">
        <h3>Student Database Management System</h3>
        <p>Description: Developed a dynamic website for efficiently managing student records in a school or college environment.</p>
        <p className='tech'>Technologies Used:</p>
        <ul className="tech-list">
          <li>
            <strong>Front-End:</strong> HTML, CSS, JavaScript, Bootstrap
          </li>
          <li>
            <strong>Back-End:</strong> Python
          </li>
          <li>
            <strong>Database:</strong> MySQL
          </li>
        </ul>
        <a href="https://github.com/harsh-kr-2023/Student-Database-Management-System.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <div className="project-card">
        <h3>Inventory Management System for E-commerce Platform</h3>
        <p>Description: Led a team in a hackathon to develop an Inventory Management System for an E-commerce platform, providing real-time visibility of available stock.</p>
        <p className='tech'>Technologies Used:</p>
        <ul className="tech-list">
          <li>
            <strong>Front-End:</strong> HTML, CSS, Java
          </li>
          <li>
            <strong>Back-End:</strong> Spring Boot
          </li>
          <li>
            <strong>Database:</strong> Optimized and designed as part of Back-End
          </li>
          <li>
            <strong>Development Tools:</strong> GitHub Copilot used for streamlined development
          </li>
        </ul>
        <a href="https://github.com/Fastest-Coder-First/EcommerceJavaApllication.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>

      <div className="project-card">
        <h3>Early Detection of Alzheimer's Disease Using MRI Scans</h3>
        <p>Description: Led a high-performing team in the end-to-end development of a website capable of accurately detecting the stage of Alzheimer's disease and identifying the infected brain region from input MRI scans.</p>
        <p className='tech'>Technologies Used:</p>
        <ul className="tech-list">
          <li>
            <strong>Front-End:</strong> Bootstrap, Python
          </li>
          <li>
            <strong>Back-End:</strong> TensorFlow, Flask
          </li>
          <li>
            <strong>Algorithms:</strong> CNN (Convolutional Neural Network), Watershed
          </li>
          <li>
            <strong>Additional:</strong> NumPy
          </li>
        </ul>
        <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <a href="https://github.com/harsh-kr-2023?tab=repositories" target="_blank" rel="noopener noreferrer">
        <button className='seeMoreBtn'>See More</button>
      </a>

    </div>
  );
}

export default Works;