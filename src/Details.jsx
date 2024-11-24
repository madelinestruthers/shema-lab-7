import React from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) return <p>No country selected</p>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      
      {/* Display the country flag */}
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="flag-image" />
      
      <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
    </div>
  );
}

export default Details;