import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/kingdom')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelect = (e) => {
    const countryCode = e.target.value;
    const selectedCountry = countries.find(country => country.cca2 === countryCode);
    if (selectedCountry) {
      navigate(`/countries/${countryCode}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <label>Select a Kingdom: </label>
      <select onChange={handleSelect}>
        <option value="">--Choose a Country--</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      {/* Renders child route */}
      <Outlet />
    </div>
  );
}

export default Countries;