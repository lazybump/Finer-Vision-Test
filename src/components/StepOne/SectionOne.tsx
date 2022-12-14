import { SectionProps } from "../../Types";

const SectionOne = ({ id, selected }: SectionProps) => {
  return (
    <section
      className={`bg-slate-300 p-2 grid gap-x-4 gap-y-2 grid-cols-3 grid-rows-2 ${
        selected === id ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col font-semibold">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" className="data-input" required />
      </div>

      <div className="flex flex-col font-semibold">
        <label htmlFor="surname">Surname</label>
        <input id="surname" type="text" className="data-input" required />
      </div>
      <div className="flex flex-col font-semibold order-4 row-start-2">
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="text" className="data-input" required />
      </div>
      <div className="row-start-3 col-start-3 justify-self-end">
        <button className="bg-purple-600 text-white px-10 py-1 rounded-md">
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
