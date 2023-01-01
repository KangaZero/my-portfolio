import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
// project images
import holidayCalender from './holidayCalendar.png';
import purrfection from './purrfection.png';
import Loader from '../components/Loader'; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // add a state to track if the data is loading
  const [projects, setProjects] = useState([]); // add a state to hold the projects data

  const fetchProjects = () => {
    // fetch the projects data from an API or a database
    // for this example, we'll use a setTimeout to simulate the delay of an API call since we don't have an actual database
    setTimeout(() => {
      setProjects([
        {
          projectName: "Holiday Calendar",
          projectLink: "https://kangazero.github.io/holiday-calendar-discoverer/",
          projectDescription: "Wiki facts about holidays picked off our simple calendar",
          imageUrl: holidayCalender
        },
        {
          projectName: "Purrfection Pet Store",
          projectLink: "https://purrfection-pet-store.herokuapp.com/",
          projectDescription: "A pet store to buy and sell your pets!",
          imageUrl: purrfection
        },
      ]);
      setIsLoading(false); // set isLoading to false when the data has finished loading
    }, 500); // 0.5 second delay
  };

  React.useEffect(() => {
    fetchProjects();
  }, []); // fetch the data when the component mounts

  return (
    <div className="home my-5" >
      {isLoading ? (
        <Loader /> // render the loading animation if the data is still loading
      ) : (
        <ProjectCard projects={projects} /> // render the projects data when it has finished loading
      )}
    </div>
  );
};

export default Home;