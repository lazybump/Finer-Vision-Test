import { useState } from "react";
import Header from "../Header";
import SectionTwo from "./SectionTwo";

const StepTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-1" onClick={() => setIsOpen((prev) => !prev)}>
      <Header title="Step 2: More comments" />
      <SectionTwo isOpen={isOpen} />
    </div>
  );
};

export default StepTwo;
