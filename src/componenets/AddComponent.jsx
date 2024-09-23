export default function AddComponent({
  handleCancelling,
  infoRefs,
  addProject,
}) {
  const [title, description, date] = infoRefs;
  function Check() {
    let points = 0;
    [title, description, date].forEach((e) => {
      if (e.current.value === "") {
        e.current.className += " border-red-500";
      } else {
        points++;
        e.current.className += " border-stone-900";
      }
    });
    if (points === 3) addProject();
  }
  return (
    <section className="flex-1 flex flex-col w-full  items-center justify-center">
      <form action="" className="w-full p-10 pt-0">
        <div className="w-full">
          <section className="p-5 w-full flex  justify-end">
            <button
              onClick={handleCancelling}
              className="text-stone-800 hover:text-red-500"
            >
              Cancel
            </button>
            <button
              onClick={Check}
              className="text-white ml-5 p-5 pt-2 pb-2  rounded-lg hover:text-stone-300 hover:bg-stone-900 bg-stone-800 "
            >
              Save
            </button>
          </section>
          <div>
            <label htmlFor="title" className="text-neutral-700 font-bold">
              TITLE
            </label>

            <input
              ref={title}
              className="  block text-neutral-700 font-semibold py-2 px-1 box-border w-full focus:outline-none focus:border-b-2 border-stone-800 bg-[#ddd]"
              type="text"
              name="title"
              id="title"
              spellCheck="false"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-neutral-700 font-bold uppercase"
            >
              description
            </label>
            <textarea
              ref={description}
              spellCheck="false"
              name="description"
              className=" resize-none  h-20 block  text-neutral-700 font-semibold py-2 px-1 box-border w-full focus:outline-none focus:border-b-2 border-stone-800 bg-[#ddd]"
              id="description"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="title"
              className="text-neutral-700 font-bold uppercase"
            >
              due date
            </label>

            <input
              ref={date}
              className=" block text-neutral-700 font-semibold py-2 px-1 box-border w-full focus:outline-none focus:border-b-2 border-stone-800 bg-[#ddd]"
              type="date"
              name="date"
              id="date"
              required
            />
          </div>
        </div>
      </form>
    </section>
  );
}
