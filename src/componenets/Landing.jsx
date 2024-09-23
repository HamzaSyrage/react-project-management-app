export default function Landing({ handleAdding }) {
  return (
    <section className=" flex-1 flex flex-col w-full  items-center justify-center ">
      <img src="logo.png" alt="logo.png" className="w-20 " />
      <h2 className="m-5 font-bold text-stone-600">No Project Selected</h2>
      <p className="mb-5 text-stone-400 font-bold">
        Select a Project or get started with a new one{" "}
      </p>
      <button
        onClick={handleAdding}
        className="p-3 rounded-lg hover:text-white hover:bg-stone-600 text-stone-300 bg-stone-700"
      >
        Creat a new project
      </button>
    </section>
  );
}
