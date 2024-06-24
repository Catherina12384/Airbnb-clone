import { useState } from "react";
import "./App.css";
import { list2 } from "./assests/card-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "components/Footer";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
       <Cards list={list2} />
      <Footer />
    </div>
  );
}

export default App;
