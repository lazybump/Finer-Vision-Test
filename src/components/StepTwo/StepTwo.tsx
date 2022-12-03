import Header from "../Header";
import SectionTwo from "./SectionTwo";
import { StepProps } from "../../Types";

const StepTwo = ({ toggle, selected }: StepProps) => {
  return (
    <div className="p-1">
      <Header title="Step 2: More comments" key={2} id={2} toggle={toggle} />
      <SectionTwo id={2} selected={selected} />
    </div>
  );
};

export default StepTwo;
