import React, { useState } from "react";
import Layout from "../Layout";
import ProjectInfoCard from "../components/ProjectInfoCard";
import Stats from "../components/Stats";
import AboutProject from "../components/AboutProject";
import ProjectsModal from "../components/ProjectsModal";
import SuccessModal from "../components/SuccessModal";

function Homepage() {
  const [modalType, setModalType] = useState(null); // 'projects' or 'success'

  const openProjectsModal = () => setModalType("projects");
  const openSuccessModal = () => setModalType("success");
  const closeModals = () => setModalType(null);

  return (
    <Layout>
      <ProjectInfoCard openProjectsModal={openProjectsModal} />
      <Stats />
      <AboutProject />
      {modalType === "projects" && (
        <ProjectsModal
          closeModals={closeModals}
          openSuccessModal={openSuccessModal}
        />
      )}
      {modalType === "success" && <SuccessModal closeModal={closeModals} />}
    </Layout>
  );
}

export default Homepage;
