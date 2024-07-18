import React from 'react'
import Layout from '../Layout';
import ProjectInfoCard from "../components/ProjectInfoCard";
import Stats from '../components/Stats';
function Homepage() {
  return (
    <Layout>
      <ProjectInfoCard />
      <Stats/>
    </Layout>
  );
}

export default Homepage