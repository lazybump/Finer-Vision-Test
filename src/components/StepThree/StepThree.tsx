import { StepProps } from "../../Types";
import Header from "../Header";
import SectionThree from "./SectionThree";

const StepThree = ({ toggle, selected }: StepProps) => {
  return (
    <div className="p-1">
      <Header title="Step 3: Final comments" key={3} id={3} toggle={toggle} />
      <SectionThree id={3} selected={selected} />
    </div>
  );
};

export default StepThree;
