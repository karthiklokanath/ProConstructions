import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sunrise Avenue',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-sunrise-avenue-400x284.jpg'
    },
    {
      title: 'Singapore Skyrise',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-singapore-skyrise-400x284.jpg'
    },
    {
      title: 'St Lucia Sunsets',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-st-lucia-sunsets-400x284.jpg'
    },
    {
      title: 'Danish Modernity',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-danish-modernity-400x284.jpg'
    },
    {
      title: 'West Shinjuku',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-west-shinjuku-400x284.jpg'
    },
    {
      title: 'Manchester Airport',
      category: 'Commercial, Industrial',
      image: 'https://avada.website/architecture/wp-content/uploads/sites/21/2019/06/portfolio-manchester-airport-400x284.jpg'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">RECENT PROJECTS</h2>
          <div className="projects-divider"></div>
          <p className="projects-subtitle">
            Avada & Avada is an award winning company with a reputation for consistent
            innovation at the highest level of design.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
