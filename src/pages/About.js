import React from 'react';
import styled from 'styled-components';

import profile from './profile.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 250px;
  height: 280px;
  border-radius: 10%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Garamond;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  font-size: 1rem;
  color: grey;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: Garamond;

`;

const Description = styled.p`
  font-size: 1.2rem;
  width: 80%;
  margin: 1rem 1rem;
  padding-top: 0.5rem;
  padding-bottom: 5rem;
  font-family: Garamond;
`;

const AboutMe = () => {
  return (
    <Container>
      <Image src={profile} alt="Profile picture" />
      <Title>Samuel Wai Weng Yong</Title>
      <List>
        <Item>Javascript |</Item>
        <Item>React |</Item>
        <Item>MERN stack developer</Item>
      </List>
      <Description>
        Hi there! My name is Samuel Wai Weng Yong, and I am a fullstack web developer. I am soon to be completing my bootcamp course at the end of January 2023. 
        I may be new to the world of web development, but I am always eager to learn and improve!
      </Description>
    </Container>
  );
};

export default AboutMe;