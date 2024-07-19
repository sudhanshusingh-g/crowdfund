import { Bookmark } from "lucide-react";
import logoMasterCraft from "../assets/logo-mastercraft.svg";
import { useState } from "react";

function ProjectInfoCard({ openProjectsModal }) {
  const [bookMarked,setBookMarked]=useState(false);
  return (
    <section className="font-commissioner bg-primary-white rounded shadow relative bottom-6 p-4 flex flex-col items-center">
      <img
        src={logoMasterCraft}
        alt="Mastercraft"
        className="relative bottom-8"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-center">
          Mastercraft Bamboo Monitor Riser
        </h2>
        <p className="text-sm text-center text-neutral-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="w-full flex items-center justify-center gap-4 md:justify-between">
          <button
            onClick={openProjectsModal}
            className="py-4 px-8 bg-primary-moderateCyan text-primary-white hover:bg-primary-darkCyan rounded-full"
          >
            Back this project
          </button>
          <div
            onClick={() => setBookMarked(!bookMarked)}
            className={`flex gap-2 w-fit rounded-full items-center cursor-pointer ${
              bookMarked
                ? "bg-primary-moderateCyan/10"
                : "bg-neutral-darkGray/30"
            }`}
          >
            <button
              className={` p-4 w-fit rounded-full text-neutral-darkGray ${
                bookMarked ? "bg-primary-darkCyan" : "bg-neutral-black"
              }`}
            >
              <Bookmark className={`h-6 w-6 ${bookMarked?"text-primary-white":"text-primary-white"}`} />
            </button>
            <span
              className={`hidden font-bold px-4 md:flex ${
                bookMarked ? "text-primary-darkCyan" : "text-neutral-darkGray"
              }`}
            >
              {bookMarked ? "Bookmark" : "Bookmark"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfoCard;
