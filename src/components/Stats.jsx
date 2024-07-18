import React from 'react'

function Stats() {
  return (
    <div className="font-commissioner rounded shadow  p-4 flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-1 border-b-[1px] border-neutral-black/10 pb-4">
        <h1 className="text-4xl font-bold text-neutral-black">$89,914</h1>
        <span className="text-neutral-darkGray text-sm">
          of $100,000 backed
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 border-b-[1px] border-neutral-black/10 pb-4">
        <h1 className="text-4xl font-bold text-neutral-black">5,007</h1>
        <span className="text-neutral-darkGray text-sm">total backers</span>
      </div>
      <div className="flex flex-col items-center gap-1 border-b-[1px] border-neutral-black/10 pb-4">
        <h1 className="text-4xl font-bold text-neutral-black">56</h1>
        <span className="text-neutral-darkGray text-sm">days left</span>
      </div>
      <div className='rounded-full bg-neutral-darkGray bg-opacity-5 h-4 w-full'>
        <div className='w-[72%] bg-primary-moderateCyan p-2 rounded-full'></div>
      </div>
    </div>
  );
}

export default Stats