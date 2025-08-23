import React from "react";
import style from "./card.module.css"; // yeh style ek variable hai hm kch bhi le skte hai . and yeh css file ko import krna ka tarika hai.
import Example from "./Example";
const Card = () => {
  return (
    <div id={style.cardWrapper}>
      <section id={style.cardContainer}>
        <h1 className={style.heading}>John Doe</h1>
      </section>

      <footer>I am footer</footer>
      <Example />
    </div>
  );
};

export default Card;
