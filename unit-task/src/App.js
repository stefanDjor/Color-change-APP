import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddNew from "./components/AddNew/AddNew";
import Home from "../src/components/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/addNew"} element={<AddNew />} />
      </Routes>
    </div>
  );
};

export default App;
