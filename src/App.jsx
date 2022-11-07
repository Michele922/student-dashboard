import "./App.css";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Filter from "./components/Navbar/Filter/Filter";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Filter />
    </div>
  );
};

export default App;
