import { useState } from "react";
import BodyOne from "./BodyOne";

const StepOne = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-1" onClick={() => setClicked((prev) => !prev)}>
      <div className="bg-[#ffb526] text-white p-4 rounded-lg cursor-pointer ">
        Step 1: Your details
      </div>
      <BodyOne clicked={clicked} />
    </div>
  );
};

export default StepOne;
