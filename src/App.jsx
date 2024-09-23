import { useState, useRef } from "react";
import Landing from "./componenets/Landing";
import SideNav from "./componenets/SideNav";
import AddComponent from "./componenets/AddComponent";
import ProjectPage from "./componenets/ProjectPage";

function App() {
  const [adding, setAdding] = useState(1);
  const [active, setActive] = useState(false);
  const [projects, setProjects] = useState([
    { id: 0, title: "", description: "", date: "", tasks: [] },
  ]);
  const activeProject = useRef();
  const infoRefs = [useRef(), useRef(), useRef()];

  function handleAdding() {
    activeProject.current = "";
    setAdding(2);
  }
  function handleCancelling() {
    setAdding(1);
  }
  function addProject() {
    setProjects((prev) => [
      ...prev,
      {
        id: projects.length,
        title: infoRefs[0].current.value,
        description: infoRefs[1].current.value,
        date: infoRefs[2].current.value,
        tasks: [],
      },
    ]);
    setAdding(1);
  }
  return (
    <>
      <main id="wrapper" className=" flex h-screen  ">
        <SideNav
          setActive={setActive}
          setAdding={setAdding}
          handleAdding={handleAdding}
          projects={projects}
          activeProject={activeProject}
        />
        {adding === 1 && <Landing handleAdding={handleAdding} />}
        {adding === 2 && (
          <AddComponent
            infoRefs={infoRefs}
            handleCancelling={handleCancelling}
            addProject={addProject}
          />
        )}
        {adding === 3 && (
          <ProjectPage
            activeProject={activeProject}
            setProjects={setProjects}
            setAdding={setAdding}
          />
        )}
      </main>
    </>
  );
}

export default App;
