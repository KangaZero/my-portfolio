import React from 'react';
import styled from 'styled-components';

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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  font-size: 1.2rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const AboutMe = () => {
  return (
    <Container>
      <Image src="/path/to/image.jpg" alt="Profile picture" />
      <Title>About Me</Title>
      <List>
        <Item>Javascript</Item>
        <Item>React</Item>
        <Item>MERN stack developer</Item>
      </List>
      <Description>
        Hi there! My name is Samuel Wai Weng Yong, and I am a fullstack web developer. I am soon to be completing my bootcamp course at the end of January 2023. 
        I may be new to world of web development, but I am always eager to learn and improve!
      </Description>
    </Container>
  );
};

export default AboutMe;