import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import PledgeSupport from "./PledgeSupport";
import { rewards } from "../data/rewards-data";

function ProjectsModal({ closeModals, openSuccessModal }) {
  const projectRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelection = (id) => {
    setSelectedProject(id);
  };

  return (
    <div className="fixed inset-0 bg-neutral-black/60 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-primary-white p-6 relative rounded-md max-w-sm w-full mx-4 max-h-screen top-24 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-extrabold text-lg">Back this project</h3>
          <X
            onClick={closeModals}
            className="cursor-pointer h-5 w-5 text-neutral-darkGray"
          />
        </div>
        <p className="my-4 text-neutral-darkGray font-medium text-opacity-80 text-sm">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="flex flex-col gap-4">
          {rewards.map((reward) => (
            <PledgeSupport
              key={reward.id}
              projectRef={projectRef}
              selected={selectedProject === reward.id}
              handleSelection={() => handleProjectSelection(reward.id)}
              data={reward}
              closeModals={closeModals}
              openSuccessModal={openSuccessModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsModal;
