import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">BUILD YOUR AVADA</h2>
          <div className="about-divider"></div>
          <p className="about-subtitle">
            Avada & Avada create exceptional properties, including residential and commercial developments.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://avada.website/architecture/wp-content/uploads/sites/21/2015/02/home-image1.jpg" 
              alt="Feature Wall" 
            />
          </div>
          
          <div className="about-text">
            <div className="text-column">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio tellus,
                ullamcorper id tempor in, hendrerit ut nulla. Maecenas dignissim tellus at quam
                interdum tempus.
              </p>
              <p>
                Phasellus ultricies, urna nec accumsan vehicula, turpis ipsum tristique ligula,
                eget congue est enim suscipit turpis cras nectus ipsum.
              </p>
            </div>
            
            <div className="text-column">
              <p>
                Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue. Cras
                egestas neque vitae dui tincidunt, vitae tristique tellus volutpat. Fusce justo ante,
                interdum in augue in, commodo imperdiet turpis.
              </p>
              <p>
                Maecenas justo neque, efficitur sit amet scelerisque eu, ornare a justo. Morbi
                scelerisque ex ut consequat vestibulum. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Praesent vel augue rutrum,
                scelerisque velit non, interdum nisl. Nunc accumsan commodo elit nec dapibus. Quisque
                aliquam eleifend nibh, eget finibus purus sagittis vel. Donec maximus egestas
                turpis sit amet luctus. In vitae libero enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
