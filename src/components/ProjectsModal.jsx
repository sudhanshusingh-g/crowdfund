import { X } from 'lucide-react'
import React from 'react'

function ProjectsModal({ setProjectsModal }) {
  return (
    <div className="bg-primary-white">
      <h3>Back this project</h3>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <X onClick={()=>setProjectsModal(false)}className="h-5 w-5" />
    </div>
  );
}

export default ProjectsModal