import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import ItemsView from "./components/item/ItemsView";
import Home from "./Home";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./components/item/AddItem";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-items" element={<ItemsView />}></Route>
          <Route exact path="/add-items" element={<AddItem />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
