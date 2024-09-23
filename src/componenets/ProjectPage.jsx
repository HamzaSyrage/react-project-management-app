import { useRef, useState } from "react";

export default function ProjectPage({ activeProject, setProjects, setAdding }) {
  const { title, description, date, tasks } = activeProject.current;
  const [addingTask, setAddingTask] = useState([...tasks]);
  const taskInfo = useRef();
  let formattedDate = new Date(date);
  function handleDelete() {
    setProjects((prev) => prev.filter((e) => e !== activeProject.current));
    setAdding(1);
  }
  function handleRemove(removeTarget) {
    activeProject.current.tasks = tasks.filter((e) => e !== removeTarget);

    setAddingTask([...tasks]);
  }
  function handleAddTask() {
    if (taskInfo.current.value !== "") {
      activeProject.current.tasks.push(taskInfo.current.value);
      taskInfo.current.value = "";
      taskInfo.current.placeholder = "";
      setAddingTask([...tasks]);
    } else {
      taskInfo.current.placeholder = "enter a valid task";
      setAddingTask([...tasks]);
    }
  }
  return (
    <section className="flex-1 p-10 flex flex-col w-full  items-center justify-center">
      <section className="flex justify-between items-center w-full">
        <div>
          <h2 className="font-bold text-5xl">{title}</h2>
          <span className="text-stone-400 block my-4 font-medium">
            {" "}
            {formattedDate.toDateString()}
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="font-semibold text-stone-800 hover:text-red-500"
        >
          Delete
        </button>
      </section>
      <section className="w-full">
        <p className="font-medium whitespace-pre-wrap">{description}</p>
        <hr className="border-[#724110] my-5 " />
        <section>
          <h2 className=" font-bold text-2xl">
            Tasks{tasks.length ? `-${tasks.length}` : null}
          </h2>
          <div className="my-5">
            <input
              placeholder=""
              ref={taskInfo}
              spellCheck="false"
              className="bg-[#ccc] font-medium outline-blue-800 p-1 w-72 mr-5 placeholder:text-red-600"
              type="text"
              name="tasks"
              id="tasks"
            />
            <button
              onClick={handleAddTask}
              className="font-semibold text-stone-800 hover:text-stone-500"
            >
              Add Task
            </button>
          </div>
          {(
            <p className="font-medium">
              This project dosen't have any tasks yet
            </p>
          ) &&
            tasks.map((e) => (
              <div
                key={e}
                className="flex min-h-20 items-center justify-between p-5 my-4 rounded-md font-medium bg-[#eee]"
              >
                <p>{e}</p>
                <button
                  onClick={() => handleRemove(e)}
                  className="font-semibold text-stone-800 hover:text-red-500"
                >
                  Clear
                </button>
              </div>
            ))}
        </section>
      </section>
    </section>
  );
}
