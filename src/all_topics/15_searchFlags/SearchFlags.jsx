import React, { useEffect, useState } from "react";

const SearchFlags = () => {
  const [allcountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      let resp = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      let data = await resp.json();
      setAllCountries(data);
      setCountries(data);
    }
    getCountries();
  }, []);

  useEffect(() => {
    if (search === "") {
      setCountries(allcountries);
    } else {
      const filteredCountries = allcountries.filter((ele) => {
        return ele.name.toLowerCase().includes(search.toLowerCase().trim());
      });
      setCountries(filteredCountries);
    }
  }, [search]);

  return (
    <div className="bg-gray-100 h-screen w-full">
      <h1 className="text-center p-1 text-3xl font-semibold">
        Search Flags Task
      </h1>
      <form className="p-3 flex justify-center">
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border-gray-400 rounded-2xl w-[50%] p-3"
          placeholder="Search Here ..."
        />
      </form>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {countries.length === 0 ? (
          <h1>Loading ...</h1>
        ) : (
          countries.map((country) => {
            return (
              <div className="boreder border-gray-400 rounded-xl shadow-2xl p-2 flex flex-col items-center justify-center">
                <img src={country.flag} alt={country.abbr} />
                <h1>{country.name}</h1>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default SearchFlags;
