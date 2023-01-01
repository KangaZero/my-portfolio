import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;

`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #666;
  }
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const PortfolioCard = (props) => {
  return (
    props.projects.map(item => 
      <Card className="portfolio-card">
        <Title>{item.projectName}</Title>
        <Image src={item.imageUrl} alt={item.projectName} />
        <Link href={item.projectLink} target="_blank">View {item.projectName} website</Link>
        <Description>{item.projectDescription}</Description>
      </Card>
    )
  );
};

export default PortfolioCard;