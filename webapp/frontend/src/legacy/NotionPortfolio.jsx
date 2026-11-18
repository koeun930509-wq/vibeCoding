import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";
import "./legacy.css";

export default function NotionPortfolio() {
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
