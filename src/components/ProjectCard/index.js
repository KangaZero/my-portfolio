import React from 'react';

const PortfolioCard = (props) => {
    const cardStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
      padding: '1rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    };
  
    const titleStyles = {
      margin: 0,
      fontSize: '1.25rem',
    };
  
    const linkStyles = {
      color: '#333',
      textDecoration: 'none',
    };
  
    const descriptionStyles = {
      margin: '0.5rem 0 0',
      fontSize: '0.9rem',
      color: '#666',
    };
  
    return (
      props.projects.map(item => 
        <div className="portfolio-card" style={cardStyles}>
        <h3 style={titleStyles}>{item.projectName}</h3>
        <a href={item.projectLink} target="_blank" style={linkStyles}>View {item.projectName} website</a>
        <p style={descriptionStyles}>{item.projectDescription}</p>
      </div>
        )
    );
  };

export default PortfolioCard;