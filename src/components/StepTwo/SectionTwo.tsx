import { ChangeEvent, useState } from "react";
import { SectionProps } from "../../Types";

const SectionTwo = ({ id, selected }: SectionProps) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]{0,2}$/;
    if (pattern.test(value) && value <= "31") {
      setDay(value);
    }
  };

  const handleMonthChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]{0,2}$/;
    if (pattern.test(value) && value <= "12") {
      setMonth(value);
    }
  };

  const handleYearChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]{0,2}$/;
    if (pattern.test(value)) {
      setYear(value);
    }
  };

  return (
    <section
      className={`bg-slate-300 p-2 grid gap-x-4 gap-y-2 grid-cols-3 grid-rows-2 ${
        selected === id ? "" : "hidden"
      }`}
    >
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
        <label htmlFor="day">Date of birth</label>
        <div>
          <input
            id="day"
            type="text"
            className="data-input w-[45px] mr-2 text-center"
            onChange={handleDayChange}
            value={day}
            required
          />
          <input
            type="text"
            className="data-input w-[45px] mr-2 text-center"
            onChange={handleMonthChange}
            value={month}
            required
          />
          <input
            type="text"
            className="data-input w-[45px] text-center"
            onChange={handleYearChange}
            value={year}
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
