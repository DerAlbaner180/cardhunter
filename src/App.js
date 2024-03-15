import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Blogs from "./Components/Blog";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="blogs" element={<Blogs />} />{" "}
          <Route path="contact" element={<Contact />} />{" "}
          <Route path="*" element={<NoPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
