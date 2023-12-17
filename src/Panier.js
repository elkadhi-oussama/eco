import React, { useState } from "react";
import { Link } from "react-router-dom";

const Panier = ({ listToBuy, setlistToBuy }) => {
  var sum = 0;

  // this state is for make only counter alone
  const [counter, setcounter] = useState(listToBuy.map(() => 1));

  console.log("this counter : ", counter); // [1,1,3,1]
  // end

  // this function for decrement only the counter clicked
  function decermentation(index) {
    const newCounter = [...counter];
    if (newCounter[index] > 1) {
      newCounter[index] = Math.max(0, counter[index] - 1);
    }
    setcounter(newCounter);
  }
  // end
  // this function for increment only the counter clicked
  function incermentation(index) {
    const newCounter = [...counter];

    newCounter[index] = Math.max(0, counter[index] + 1);

    setcounter(newCounter);
  }
  //end
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
            <button className="munis" onClick={() => decermentation(i)}>
              -
            </button>
            <input type="number" value={counter[i]} />
            <button className="plus" onClick={() => incermentation(i)}>
              +
            </button>
            <p> {(sum = sum + parseInt(el.price) * counter[i])} $ </p>

            <button
              onClick={() => (
                setlistToBuy(listToBuy.filter((item) => item.id !== el.id)),
                setcounter((counter.splice(i, 1),counter))
              )}
            >
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </div>

      <p> Total Price : {sum} $ </p>
    </div>
  );
};

export default Panier;
