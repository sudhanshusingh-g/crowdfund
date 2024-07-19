import React from "react";
import PledgeCard from "./PledgeCard";
import { rewards } from "../data/rewards-data";

function AboutProject() {
  return (
    <section className="font-commissioner bg-primary-white rounded shadow mt-2 p-4 flex flex-col">
      <h3 className="font-bold">About this project</h3>
      <p className="text-neutral-darkGray mt-6 leading-7">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-neutral-darkGray mt-6 mb-4 leading-7">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-4">
        {rewards.slice(1).map((reward) => (
          <PledgeCard key={reward.id} data={reward} />
        ))}
      </div>
    </section>
  );
}

export default AboutProject;
