import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { product } from "./data";
import { useState } from "react";
import Panier from "./Panier";
function App() {
  const [listToBuy, setlistToBuy] = useState([]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="navBar">
                <Link to="/panier">
                  <img src="./images/panier.png" alt="" />
                </Link>
                {listToBuy.length > 0 ? <p> {listToBuy.length} </p> : null}
              </div>

              <div className="allCards">
                {product.map((pro) => {
                  return (
                    <div key={pro.id} className="card">
                      <img src={pro.img} alt="" />
                      <h1> {pro.name} </h1>
                      <p> {pro.price} $</p>
                      <button
                        onClick={() => {
                          return (
                            !listToBuy.includes(pro) &&
                            setlistToBuy([...listToBuy, pro])
                          );
                        }}
                      >
                        {" "}
                        BUY{" "}
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          }
        />
        <Route path="/panier" element={<Panier listToBuy={listToBuy}  setlistToBuy={setlistToBuy} />} />
      </Routes>
    </div>
  );
}

export default App;
