import { filters } from "./filtersSlice";
import "./filters.css"
function Filters() {
  return (
    <div className="filters">
      {filters.map((filter: string) => (
        <button key={filter} value={filter}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filters;
