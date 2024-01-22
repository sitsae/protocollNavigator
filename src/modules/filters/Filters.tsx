import { filters } from "./filtersSlice";

function Filters() {
  return (
    <>
      {filters.map((filter: string) => (
        <button key={filter} value={filter}>
          {filter}
        </button>
      ))}
    </>
  );
}

export default Filters;
