import { useState, useEffect } from "react";
import countriesService from "./services/countries"
import Countries from "./components/Countries";
import './index.css'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("")

  // Fetch data from the server
  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => {
        setCountries(initialCountries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <Countries
      countries={countries}
      filter={filter}
      handleFilterChange={handleFilterChange}
    />
  );
};

export default App;