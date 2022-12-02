import { useState } from "react";
import SectionOne from "./SectionOne";

const StepOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-1 relative" onClick={() => setIsOpen((prev) => !prev)}>
      <header className="bg-[#ffb526] text-white p-4 rounded-lg cursor-pointer ">
        Step 1: Your details
      </header>
      <SectionOne isOpen={isOpen} />
    </div>
  );
};

export default StepOne;
