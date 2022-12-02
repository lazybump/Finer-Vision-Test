import { ChangeEvent, useState } from "react";

interface SectionTwoProps {
  isOpen: boolean;
}

const SectionTwo = ({ isOpen }: SectionTwoProps) => {
  const [day, setDay] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]{0,2}$/;
    if (pattern.test(target.value)) {
      setDay(target.value);
    }
  };

  return (
    <section className="bg-slate-300 p-2 grid gap-x-4 gap-y-2 grid-cols-3 grid-rows-2">
      <div className="flex flex-col font-semibold">
        <label htmlFor="first-name">Telephone number</label>
        <input id="first-name" type="text" className="data-input" />
      </div>

      <div className="flex flex-col font-semibold">
        <label htmlFor="surname">Gender</label>
        <select disabled className="data-input">
          <option value="male">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex flex-col font-semibold row-start-2">
        <label htmlFor="dob">Date of birth</label>
        <div>
          <input
            id="dob"
            type="text"
            onChange={handleChange}
            className="data-input w-[40px] mr-2"
            value={day}
            required
          />
          <input
            id="dob"
            type="text"
            className="data-input w-[40px] mr-2"
            required
          />
          <input
            id="dob"
            type="text"
            className="data-input w-[40px]"
            required
          />
        </div>
      </div>
      <div className="row-start-3 col-start-3 justify-self-end">
        <button className="bg-purple-600 text-white px-10 py-1 rounded-md">
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default SectionTwo;
