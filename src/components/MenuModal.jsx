
function MenuModal() {
  return (
    <div className="flex justify-center items-center inset-0 bg-neutral-black/20 absolute top-32 z-40">
      <div className="relative bg-primary-white shadow-md rounded-md w-[70%] flex flex-col z-20">
        <button className=" text-left px-4 py-6 border-b border-neutral-darkGray border-opacity-40 font-bold">
          About
        </button>
        <button className="text-left px-4 py-6 border-b border-neutral-darkGray border-opacity-40 font-bold">
          Discover
        </button>
        <button className="text-left px-4 py-6 border-neutral-darkGray border-opacity-40 font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MenuModal;
