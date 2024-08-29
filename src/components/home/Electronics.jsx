import React from "react";

// Example product data
const products = [
  { name: "Grocery", image: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
  { name: "Mobile", image: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Fashion", image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" },
  { name: "Electronics", image: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" },
  { name: "Home & Furniture", image: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" },
  { name: "Beauty, Toys & More", image: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" },
  { name: "Appliances", image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
  { name: "Travel", image: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
];

export default function Electronics() {
  return (
    <div style={navbarStyle}>
      {products.map((product, index) => (
        <div key={index} style={productContainerStyle}>
          <div style={imageContainerStyle}>
            <img src={product.image} alt={`${product.name} icon`} style={imageStyle} />
          </div>
          <div>
            <p style={textStyle}>{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// CSS in JS
const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: '50px',
  margin: '65px 0 18px 0',
  width: '100%',
  height: '130px',
  backgroundColor: '#fff',
};

const productContainerStyle = {
  width: 120,
  textAlign: 'center',
};

const imageContainerStyle = {
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  maxHeight: '100%',
  maxWidth: '100%',
};

const textStyle = {
  fontSize: "14px",
  fontWeight: 'bold',
};

