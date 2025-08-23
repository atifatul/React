import { useEffect, useState } from "react";
import style from "./FetchTask.module.css";

const FetchTasks = () => {
  // yeh 3 state hai dropdown ka value ko store krne ke liye
  const [selectCountry, setSelectCountry] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectCity, setSelectCity] = useState("");

  // yeh state hai to store api data

  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  // To enable /Disable select tags

  const [isStateDisable, setIsStateDisable] = useState(true);
  const [isCityDisable, setIsCityDisable] = useState(true);

  const [userdata, setUserData] = useState({
    country: "",
    state: "",
    city: "",
  });

  //   To get all countries
  useEffect(() => {
    async function getAllCountries() {
      let resp = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      let countriesData = await resp.json();

      setAllCountries(countriesData);
    }
    getAllCountries();
  }, []);

  //   to get all states with respect to selectedCountry

  useEffect(() => {
    if (!selectCountry) return;
    console.log("States API Call");
    setIsStateDisable(false);

    async function getAllStates() {
      let resp = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectCountry}/states`
      );
      let stateData = await resp.json();
      console.log(stateData);
      setAllStates(stateData); // storing states data to allstates
    }
    getAllStates();
  }, [selectCountry]);

  // to get all the cities with respect to selectState and selectCountry

  useEffect(() => {
    if (!selectState) return;
    console.log("City Api call");
    setIsCityDisable(false);

    async function getAllCities() {
      let resp = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectCountry}/state=${selectState}/cities`
      );
      let cityData = await resp.json();
      console.log(cityData);
      setAllCities(cityData);
    }
    getAllCities();
  }, [selectState]);

  useEffect(() => {
    if (!selectCity) return;

    setUserData({
      country: selectCountry,
      state: selectState,
      city: selectCity,
    });
  }, [selectCity]);
  return (
    <div className={style.FetchTaskContainer}>
      <section>
        <h1>Fetch Task 1</h1>
        <select
          name="country"
          id="country"
          value={selectCountry}
          onChange={(e) => setSelectCountry(e.target.value)}
        >
          <option value="" disabled>
            Select Country
          </option>

          {allCountries.map((countryName, idx) => {
            return (
              <option value={countryName} key={idx}>
                {countryName}
              </option>
            );
          })}
        </select>

        <select
          name="State"
          id="State"
          value={selectState}
          onChange={(e) => setSelectState(e.target.value)}
          disabled={isStateDisable}
        >
          <option value="" disabled>
            Select State
          </option>

          {allStates.map((StateName, idx) => {
            return (
              <option value={StateName} key={idx}>
                {StateName}
              </option>
            );
          })}
        </select>

        <select
          name="city"
          id="city"
          value={selectCity}
          onChange={(e) => setSelectCity(e.target.value)}
          disabled={isCityDisable}
        >
          <option value="" disabled>
            Select City
          </option>

          {allCities.map((CityName, idx) => {
            return (
              <option value={CityName} key={idx}>
                {CityName}
              </option>
            );
          })}
        </select>

        {!selectCity ? null : (
          <h1>
            Country:{userdata.country} State:{userdata.state} City:
            {userdata.city}
          </h1>
        )}
      </section>
    </div>
  );
};

export default FetchTasks;
