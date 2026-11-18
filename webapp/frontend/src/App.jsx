import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<WorkDetail />} />
    </Routes>
  );
}
