function PledgeCard({ data }) {
  const inActive = data.rewardsLeft === 0;

  return (
    <div
      className={`w-[88%] shadow mx-auto border-[0.025rem] p-4 flex flex-col gap-4 border-neutral-darkGray/40 rounded ${
        inActive ? "opacity-35 pointer-events-none" : ""
      }`}
    >
      <div className="md:flex items-center justify-between">
        <h1 className="font-extrabold text-neutral-black">{data.title}</h1>
        {data.pledgeAmount !== null && (
          <p className="text-primary-moderateCyan font-semibold text-sm">
            Pledge ${data.pledgeAmount} or more
          </p>
        )}
      </div>
      <p className="my-2 text-neutral-darkGray leading-6 font-medium text-sm">
        {data.rewardDescription}
      </p>
      <div className="md:flex items-center justify-between">
        <div>
          <span className="text-3xl font-extrabold">{data.rewardsLeft}</span>
          <span className="text-neutral-darkGray font-medium ml-2">left</span>
        </div>
        <button
          className={`px-8 my-4 py-4 text-primary-white rounded-full text-sm hover:bg-primary-darkCyan font-medium ${
            inActive
              ? "bg-neutral-darkGray cursor-not-allowed"
              : "bg-primary-moderateCyan"
          }`}
          disabled={inActive}
        >
          {inActive ? "Out of Stock" : "Select Rewards"}
        </button>
      </div>
    </div>
  );
}

export default PledgeCard;
