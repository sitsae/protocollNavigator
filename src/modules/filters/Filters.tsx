import { addFilter, removeFilter, filters } from './filtersSlice';
import { useSelector, useDispatch } from "react-redux";
import store from "../../app/store";
import "./filters.css"

function Filters() {
  let state = store.getState()
  const setFilter = useSelector((state: any) => state.filters);
  const dispatch = useDispatch()

  const toggleFilters = (selectedFilter: string) => {
    if (state.filters.includes(selectedFilter)) {
      dispatch(removeFilter(selectedFilter))
      state = store.getState()
    } else { 
      dispatch(addFilter(selectedFilter))
      state = store.getState()
    }

  }
  console.log(setFilter)
  return (
    <div className="filters">
      {filters.map((filter: string) => (
        <button key={filter} value={filter} onClick={() => toggleFilters(filter)}>
          {filter}
        </button>
      ))}
      <p>{setFilter}</p>
    </div>
  );
}
 
export default Filters;
