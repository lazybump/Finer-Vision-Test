import { useState } from "react";
import Header from "../Header";
import SectionOne from "./SectionOne";

const StepOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-1" onClick={() => setIsOpen((prev) => !prev)}>
      <Header title="Step 1: Your details" />
      <SectionOne isOpen={isOpen} />
    </div>
  );
};

export default StepOne;
