const Step1 = () => {
  return (
    <div className="p-1">
      <div className="bg-[#ffb526] text-white p-4 rounded-lg">
        Step 1: Your details
      </div>
      <div className="bg-gray-200 p-4">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" />
        </div>
        <div className="inline">
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" />
        </div>
      </div>
      <button className="bg-violet-600 text-white float-right">
        Next &gt;
      </button>
    </div>
  );
};

export default Step1;
