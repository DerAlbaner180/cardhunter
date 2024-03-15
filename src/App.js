import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";

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