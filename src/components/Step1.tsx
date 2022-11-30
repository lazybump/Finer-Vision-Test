interface inputProps {
  id: number;
  name: string;
  type?: string;
}

const Step1: React.FC = () => {
  const inputs: inputProps[] = [
    { id: 1, name: "First Name" },
    { id: 2, name: "Surname" },
    { id: 3, name: "Email", type: "email" },
  ];

  return (
    <div className="p-1">
      <div className="bg-[#ffb526] text-white p-4 rounded-lg">
        Step 1: Your details
      </div>
      <div className="bg-slate-300 p-2">
        <div className="flex">
          <div className="flex flex-col mr-4 font-semibold">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              className="rounded-md shadow-xl"
            />
          </div>

          <div className="flex flex-col font-semibold">
            <label htmlFor="surname">Surname</label>
            <input id="surname" type="text" className="rounded-md shadow-xl" />
          </div>
        </div>
        <div className="flex flex-col mt-2 font-semibold">
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="text"
            className="rounded-md shadow-xl w-1/2"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-600 text-white mt-2 px-6 py-1 rounded-md">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
