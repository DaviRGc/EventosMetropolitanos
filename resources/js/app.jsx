import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/documentacion" element={<Documentation />} />
          <Route path="/caso-estudio" element={<CaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}