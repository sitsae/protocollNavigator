import "./App.css";
import Protocols from "./modules/protocols/Protocols";
import Filters from "./modules/filters/Filters";
import Info from "./modules/info/Info"

function App() {
  return (
    <>
      <Filters />
      <Protocols />
      <Info/>
    </>
  );
}

export default App;
