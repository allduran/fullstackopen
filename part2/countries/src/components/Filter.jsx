const Filter = ({ filter, handleFilterChange }) => {
    return (
      <div>
        <label>Find countries: </label><input value={filter} onChange={handleFilterChange} />
      </div>
    );
  };
  
  export default Filter;