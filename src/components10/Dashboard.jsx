import React from "react";

const Dashboard= (props) => {
  const {product} = props;
  return (
    <div>
      {product.map((product) => {
        return (
          <div className="Product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-details">
              <h3 className="title">{product.title}</h3>

              <div className="rating">
                <span className="rating-badge">{product.rating} </span>
                <span className="reviews">
                  {product.reviews} Ratings & {product.reviewCount} Reviews
                </span>
              </div>

              <ul className="features">
                {product.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="price-section">
                <h2 className="price">₹{product.price}</h2>

                <p className="old-price">₹{product.oldPrice}</p>
                <p className="discount">{product.discount}% off</p>

                <p className="exchange">{product.exchange}</p>
                <p className="bank">{product.bankOffer}</p>

                {product.assured && <div className="assured"> Assured</div>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;