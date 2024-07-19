import { X } from "lucide-react";
import check from "../assets/icon-check.svg"

function SuccessModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-neutral-black/60 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-primary-white p-6 text-center relative rounded-md max-w-sm w-full mx-4 max-h-screen top-24 overflow-y-auto">
        <div className="bg-primary-moderateCyan rounded-full w-fit mx-auto my-2">
          <img src={check} alt="Check Icon" />
        </div>
        <div className="flex items-center justify-center mb-4">
          <h3 className="font-extrabold text-lg">Thanks for your support!</h3>
          
        </div>
        <p className="text-neutral-darkGray text-sm leading-6 mb-4">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          onClick={closeModal}
          className="px-6 mx-auto py-3 rounded-full bg-primary-moderateCyan text-primary-white hover:bg-primary-darkCyan text-sm font-medium"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
