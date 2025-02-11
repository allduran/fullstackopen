const Filter = ({ filter, handleFilterChange }) => {
    return (
        <>
            Search: <input value={filter} onChange={handleFilterChange} />
        </>
    )
}

export default Filter;