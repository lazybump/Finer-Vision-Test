import { useState } from "react";
import { StepProps } from "../../Types";
import Header from "../Header";
import SectionOne from "./SectionOne";

const StepOne = ({ toggle, selected }: StepProps) => {
  return (
    <div className="p-1">
      <Header title="Step 1: Your details" key={1} id={1} toggle={toggle} />
      <SectionOne id={1} selected={selected} />
    </div>
  );
};

export default StepOne;
