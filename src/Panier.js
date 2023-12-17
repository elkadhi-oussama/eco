import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Panier = ({ listToBuy, setlistToBuy }) => {
  const [counter, setcounter] = useState(listToBuy.map(() => 1));
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum whenever counter or listToBuy changes
    const newSum = listToBuy.reduce(
      (acc, el, i) => acc + parseInt(el.price) * counter[i],
      0
    );
    setSum(newSum);
  }, [listToBuy, counter]);
  // end Calculate
// incr and decr 
  function decrement(index) {
    const newCounter = [...counter];
    if (newCounter[index] > 1) {
      newCounter[index] = newCounter[index] - 1;
      setcounter(newCounter);
    }
  }

  function increment(index) {
    const newCounter = [...counter];
    newCounter[index] = newCounter[index] + 1;
    setcounter(newCounter);
  }
//end 
// remove item
  function removeItem(index) {
    setlistToBuy((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });

    setcounter((prevCounter) => {
      const newCounter = [...prevCounter];
      newCounter.splice(index, 1);
      return newCounter;
    });
  }
// end 
  return (
    <div className="Panier">
      <Link to="/">
        <button> Home Page </button>
      </Link>
      <h1> this panier page </h1>
      <div className="allCardOne">
        {listToBuy.map((el, i) => (
          <div key={i} className="cardOne">
            <img src={el.img} alt="" />
            <h1> {el.name} </h1>
            <p> {el.price} </p>
            <button className="munis" onClick={() => decrement(i)}>
              -
            </button>
            <input type="number" value={counter[i]} readOnly />
            <button className="plus" onClick={() => increment(i)}>
              +
            </button>
            <p> {parseInt(el.price) * counter[i]} $ </p>
            <button onClick={() => removeItem(i)}> X </button>
          </div>
        ))}
      </div>

      <p> Total Price : {sum} $ </p>
    </div>
  );
};

export default Panier;