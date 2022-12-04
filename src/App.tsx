import { useState } from "react";
import StepOne from "./components/StepOne/StepOne";
import StepThree from "./components/StepThree/StepThree";
import StepTwo from "./components/StepTwo/StepTwo";

function App() {
  const [selected, setSelected] = useState<number | null>(1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="h-screen bg-blue-200 flex justify-center items-center">
      <form
        action="#"
        className="bg-white rounded-xl overflow-hidden w-3/4 lg:w-[800px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <StepOne toggle={toggle} selected={selected} />
        <StepTwo toggle={toggle} selected={selected} />
        <StepThree toggle={toggle} selected={selected} />
      </form>
    </div>
  );
}

export default App;
