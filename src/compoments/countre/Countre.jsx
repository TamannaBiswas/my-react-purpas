import { useState } from "react";
import "./Countre.css";

export default function Countre({
  country,
  handelVisitddCountres,
  handelVisaFlage,
}) {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? " purple" : "black" }}>
        Name : {name.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area} </p>
      <p>
        <small>Code :{cca3}</small>
      </p>
      <button onClick={() => handelVisaFlage(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={() => handelVisitddCountres(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={handelVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? " visited the country ." : " I want to visited ."}
    </div>
  );
}
