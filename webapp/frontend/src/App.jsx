import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <>
      <Header />
      <ProjectGrid projects={projects} />
    </>
  );
}
