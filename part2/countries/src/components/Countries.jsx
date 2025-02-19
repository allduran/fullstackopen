import { useState, useEffect } from "react";
import Filter from "./Filter";
import CountryInfo from "./CountryInfo";

const Countries = ({ countries, filter, handleFilterChange }) => {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    setCountryInfo(null);
  }, [filter]);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  function showCountry(cca3) {
    const country = filteredCountries.find(country => country.cca3 === cca3);
    setCountryInfo(country);
  }

  let content;

  if (countryInfo) {
    content = <CountryInfo country={countryInfo} />;
  } else if (filteredCountries.length > 10) {
    content = <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length === 1) {
    content = <CountryInfo country={filteredCountries[0]} />;
  } else if (filteredCountries.length > 0) {
    content = filteredCountries.map((country) => (
      <div key={country.cca3}>
        {country.name.common}{" "}
        <button onClick={() => showCountry(country.cca3)}>show</button>
      </div>
    ));
  } else {
    content = <p>No countries found.</p>;
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {content}
    </div>
  );
};

export default Countries;