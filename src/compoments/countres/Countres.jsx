import { useEffect } from "react";
import { useState } from "react";
import Countre from "../countre/Countre";
import "./Countres.css";

export default function Countres() {
  const [countries, setCountries] = useState([]);
  const [visitddCountres, setVisitddCountres] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitddCountres = (country) => {
    console.log(country);
    const newvisitddCountres = [...visitddCountres, country];
    setVisitddCountres(newvisitddCountres);
  };

  const handelVisaFlage = (flag) => {
    console.log("flags add");
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <div>
      <h3>Countries :{countries.length}</h3>
      <div>
        <h5>Visited countries :{visitddCountres.length}</h5>
        <ul>
          {visitddCountres.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-contaner">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Countre
            key={country.cca3}
            handelVisitddCountres={handelVisitddCountres}
            handelVisaFlage={handelVisaFlage}
            country={country}
          ></Countre>
        ))}
      </div>
    </div>
  );
}
