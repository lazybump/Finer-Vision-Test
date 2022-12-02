import StepOne from "./components/StepOne/StepOne";
import StepThree from "./components/StepThree/StepThree";
import StepTwo from "./components/StepTwo/StepTwo";

function App() {
  return (
    <div className="h-screen bg-blue-200 flex justify-center items-center">
      <form
        action="#"
        className="bg-white rounded-xl overflow-hidden w-3/4 lg:w-[800px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </form>
    </div>
  );
}

export default App;
