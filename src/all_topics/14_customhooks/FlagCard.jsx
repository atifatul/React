import React from "react";

const FlagCard = ({ ele }) => {
  return (
    <div>
      <img src={ele.flag} alt={ele.abbr} height={200} width={200}></img>
      <h3>{ele.name}</h3>
    </div>
  );
};

export default FlagCard;
