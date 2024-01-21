function Filters() {
  const filters = ["Abdomen", "TØK", "MS", "Barn", "Nevro"];
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
