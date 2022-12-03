import { useState } from "react";
import Header from "../Header";
import SectionOne from "./SectionOne";

interface Props {
  toggle: (i: number) => void;
  selected: null | number;
}

const StepOne = ({ toggle, selected }: Props) => {
  return (
    <div className="p-1">
      <Header title="Step 1: Your details" key={1} id={1} toggle={toggle} />
      <SectionOne id={1} selected={selected} />
    </div>
  );
};

export default StepOne;
