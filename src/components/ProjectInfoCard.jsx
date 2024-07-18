import { Bookmark } from "lucide-react";
import logoMasterCraft from "../assets/logo-mastercraft.svg"
import ProjectsModal from "./ProjectsModal";

function ProjectInfoCard({ projectsModal, setProjectsModal }) {
  return (
    <section className="font-commissioner bg-primary-white  rounded shadow relative bottom-6 p-4 flex flex-col items-center">
      <div className="">
        <img
          src={logoMasterCraft}
          alt="Mastercraft"
          className="relative bottom-8 "
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-center">
          Mastercraft Bamboo Monitor Riser
        </h2>
        <p className="text-sm text-center  text-neutral-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="w-full flex items-center justify-center gap-4 md:justify-between ">
          <button
            onClick={() => setProjectsModal(true)}
            className="py-4 px-8 bg-primary-moderateCyan text-primary-white hover:bg-primary-darkCyan rounded-full"
          >
            Back this project
          </button>
          <button className="bg-neutral-black p-4 w-fit rounded-full text-neutral-darkGray">
            <Bookmark className="h-6 w-6" />
          </button>
        </div>
      </div>
      {projectsModal && (
        <div className="absolute h-[100vh] z-30  w-[80%]">
          <ProjectsModal setProjectsModal={setProjectsModal} />
        </div>
      )}
    </section>
  );
}

export default ProjectInfoCard