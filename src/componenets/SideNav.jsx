export default function SideNav({
  handleAdding,
  projects,
  activeProject,
  setActive,
  setAdding,
}) {
  function handleProject(e) {
    activeProject.current = e;
    setAdding(3);
    setActive((prev) => !prev);
  }
  return (
    <nav className="overflow-y-auto pl-5 pt-10 pr-10 mt-5 rounded-tr-xl  bg-[#0f0d0b] ">
      <h2 className=" uppercase  mt-4 mb-10 text-2xl font-bold text-white">
        Your projects
      </h2>
      <button
        onClick={handleAdding}
        className="p-2 mb-5 hover:text-white hover:bg-stone-600  rounded-lg text-stone-300 bg-stone-700  "
      >
        + Add project
      </button>
      {projects &&
        projects.map((e, index) =>
          index === 0 ? undefined : typeof activeProject.current === "object" &&
            e.id === activeProject.current.id ? (
            <button
              key={e.title}
              onClick={() => handleProject(e)}
              className="hover:text-white bg-[#212121] w-full justify-start flex py-1 px-2 text-stone-400 rounded-sm my-5"
            >
              {e.title}
            </button>
          ) : (
            <button
              key={e.title}
              onClick={() => handleProject(e)}
              className=" hover:text-white hover:bg-[#212121] w-full justify-start flex py-1 px-2 text-stone-400  rounded-sm  my-5"
            >
              {e.title}
            </button>
          )
        )}
    </nav>
  );
}
