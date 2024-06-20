import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/organisms/HomePage";
import { Layout } from "./components/layouts/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
