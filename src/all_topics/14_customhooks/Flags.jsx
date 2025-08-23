import React from "react";
import { useApi } from "./customhooks";
import FlagCard from "./FlagCard";

const Flags = () => {
  let Flagsdata = useApi("https://xcountries-backend.azurewebsites.net/all");
  console.log(Flagsdata);

  return (
    <div>
      <h1>Flags</h1>
      <section>
        {Flagsdata.length === 0 ? (
          <h1>Loading ..</h1>
        ) : (
          Flagsdata.map((ele, idx) => {
            return <FlagCard key={idx}  ele={ele}/>
          })
        )}
      </section>
    </div>
  );
};

export default Flags;
