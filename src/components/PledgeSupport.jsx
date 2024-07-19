import {  useState } from "react";

function PledgeSupport({
  data,
  closeModals,
  projectRef,
  selected,
  handleSelection,
  openSuccessModal,
}) {
  const inActive = data.rewardsLeft === 0;
  const [pledgeValue, setPledgeValue] = useState(data.pledgeAmount);

  const handlePledgeValue = (e) => {
    if (e.target.value >= data.pledgeAmount) {
      setPledgeValue(e.target.value);
    }
  };

  const handleSubmit = () => {
    openSuccessModal();
    setTimeout(() => closeModals(), 50000); 
  };

  return (
    <div
      onClick={handleSelection}
      className={`rounded border cursor-pointer border-neutral-darkGray ${
        selected ? "border-primary-darkCyan" : "border-opacity-30"
      } ${inActive ? "opacity-35 pointer-events-none" : ""}`}
    >
      <div className="p-6 flex my-2 items-center gap-4">
        <input ref={projectRef} type="radio" className="hidden" />
        <div
          className={`h-5 w-5 border rounded-full flex items-center justify-center ${
            selected ? "bg-primary-moderateCyan" : "bg-primary-white"
          }`}
        ></div>
        <div>
          <h3 className="font-bold text-sm">{data.title}</h3>
          {data.pledgeAmount !== null && (
            <p className="text-primary-moderateCyan font-semibold text-sm">
              Pledge ${data.pledgeAmount} or more
            </p>
          )}
        </div>
      </div>
      <p className="p-6 text-xs text-neutral-darkGray font-medium leading-[1.6]">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      {data.rewardsLeft !== null && (
        <div className="p-6">
          <span className="text-xl font-extrabold">{data.rewardsLeft}</span>
          <span className="text-neutral-darkGray font-medium ml-2 text-xs">
            left
          </span>
        </div>
      )}
      {selected && (
        <div>
          <hr className="h-px bg-neutral-darkGray bg-opacity-40 border-0" />
          <div className="p-6 text-center">
            {data.pledgeAmount !== null && (
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm">Enter your pledge</label>
                <div className="flex items-center gap-4 w-1/2 rounded-full border border-neutral-darkGray border-opacity-40 px-4 py-2">
                  <span className="font-bold text-neutral-darkGray">$</span>
                  <input
                    type="number"
                    className="w-1/2 border-none focus:outline-none"
                    value={pledgeValue}
                    onChange={handlePledgeValue}
                  />
                </div>
              </div>
            )}
            <button
              onClick={handleSubmit}
              className="mt-4 px-8 py-3 text-sm rounded-full text-primary-white bg-primary-moderateCyan hover:bg-primary-darkCyan"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgeSupport;
