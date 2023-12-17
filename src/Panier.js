import React from 'react'
import { Link } from 'react-router-dom'

const Panier = ({listToBuy}) => {
  return (
    <div>
        <Link to="/" ><button> Home Page  </button></Link>
        <h1> this panier page </h1>
            <div>
                {listToBuy.map(el=>  (
                    <>
                    <h1> {el.name}  </h1>
                    <img src={el.img} alt="" />
                    <p> {el.price} </p>
                    </>
                ))}
            </div>
    </div>
  )
}

export default Panier