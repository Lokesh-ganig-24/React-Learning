import React from "react";

function Dash(props) {
  let { products } = props;

  return (
    <div className="container">
      {products.map((item, index) => {
        return (
          <div className="product" key={index}>
            <div className="image">
              <img src={item.image} alt="phone" />
            </div>

            <div className="info">
              <h2>{item.name}</h2>
              <p className="rating">{item.rating}</p>

              <ul>
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="price">
              <h2>{item.price}</h2>
              <p className="old">{item.oldprice}</p>
              <p className="offer">{item.offer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dash;