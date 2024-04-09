import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Europe", "Asia", "Oceania"];

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
      //console.log(data);
    });
  });

  return (
    <div className="countries">
      <ul className="countries__filter">
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {
          selectedRadio && <button onClick={() => setSelectedRadio("")}>Tous</button>
        }
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              value={continent}
              checked={selectedRadio ? selectedRadio === continent : ""}
              name="continent"
              onChange={(e) => setSelectedRadio(e.target.value)}
            />{" "}
            <label htmlFor={continent}> {continent} </label>
          </li>
        ))}
      </ul>
      <div className="countries__list">
        <ul>
          {data.filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => (
              <Country key={index} country={country} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
