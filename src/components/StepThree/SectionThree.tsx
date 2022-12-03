const SectionOne = () => {
  return (
    <section className="bg-slate-300 p-2 grid grid-cols-5 gap-x-4 gap-y-2 ">
      <div className="flex flex-col font-semibold col-span-3">
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          className="data-input resize-none h-36"
        ></textarea>
      </div>
      <div className="col-start-5 self-end">
        <button className="bg-purple-600 text-white w-full py-1 rounded-md">
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
