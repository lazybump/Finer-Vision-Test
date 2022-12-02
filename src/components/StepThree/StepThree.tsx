import { useState } from "react";
import Header from "../Header";
import SectionThree from "./SectionThree";

const StepThree = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-1" onClick={() => setIsOpen((prev) => !prev)}>
      <Header title="Step 3: Final comments" />
      <SectionThree isOpen={isOpen} />
    </div>
  );
};

export default StepThree;
