import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Home = () => {

  const projects = [
    {
      projectName: "Holiday Calendar",
      projectLink: "https://kangazero.github.io/holiday-calendar-discoverer/",
      projectDescription: "Wiki facts about holidays picked off our simple calendar"
    },
    {
      projectName: "Purrfection Pet Store",
      projectLink: "https://purrfection-pet-store.herokuapp.com/",
      projectDescription: "A pet store to buy and sell your pets!"
    },
  ];

  return (
    <div className="home my-5" >
        <ProjectCard projects={projects} />
    </div>
  );
};

export default Home;
