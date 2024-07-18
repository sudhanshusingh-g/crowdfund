import React from 'react'

function PledgeCard({data}) {
    const inActive=data.rewardsLeft === 0;

  return (
    <div
      className={`w-[88%]   shadow mx-auto border-[0.025rem] p-4 flex flex-col gap-4 border-neutral-darkGray/40 rounded 
    ${inActive ? "opacity-35 pointer-events-none" : ""}`}
    >
      <div>
        {/* Reward title */}
        <h1 className="font-extrabold text-neutral-black">{data.title}</h1>
        {/* Pledge token */}
        <p className="text-primary-moderateCyan font-semibold text-sm">
          Pledge ${data.pledgeAmount} or more
        </p>
      </div>
      {/* Reward description */}
      <p className="my-2 text-neutral-darkGray leading-6  font-medium text-sm">
        {data.rewardDescription}
      </p>
      {/* Reward left */}
      <div className="">
        <span className="text-3xl font-extrabold">{data.rewardsLeft}</span>
        <span className="text-neutral-darkGray font-medium ml-2">left</span>
      </div>
      {/* Select reward */}
      <div>
        <button
          className={`px-8 py-4  text-primary-white rounded-full text-sm hover:bg-primary-darkCyan font-medium
            ${
              inActive
                ? "bg-neutral-darkGray cursor-not-allowed"
                : "bg-primary-moderateCyan"
            }`}
        >
          {inActive ? "Out of Stock" : "Select Rewards"}
        </button>
      </div>
    </div>
  );
}

export default PledgeCard