import { Bookmark, BookMarked, BookMarkedIcon } from "lucide-react";
import logoMasterCraft from "../assets/logo-mastercraft.svg"

function ProjectInfoCard() {
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
        <div className="w-full flex items-center  gap-4 justify-between ">
          <button className="py-4 px-8 bg-primary-moderateCyan text-primary-white hover:bg-primary-darkCyan rounded-full">
            Back this project
          </button>
          <button className="bg-neutral-black p-2 w-fit rounded-full text-neutral-darkGray">
            <Bookmark />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfoCard