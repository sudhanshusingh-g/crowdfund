import React, { useState } from 'react'
import Layout from '../Layout';
import ProjectInfoCard from "../components/ProjectInfoCard";
import Stats from '../components/Stats';
import AboutProject from '../components/AboutProject';
function Homepage() {
  const [projectsModal, setProjectsModal] = useState(false);
  return (
    <Layout>
      <ProjectInfoCard projectsModal={projectsModal} setProjectsModal={setProjectsModal}/>
      <Stats/>
      <AboutProject/>
      
    </Layout>
  );
}

export default Homepage