import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

// Example product data
const products = [
  { name: "Grocery", image: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
  { name: "Mobile", image: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Toys", image: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" },
  { name: "Fashion", image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" },
  { name: "Electronics", image: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" },
  { name: "Appliances", image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },
  { name: "Travel", image: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },
  { name: "Two Wheelers", image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" },
  { name: "Home & Furniture", image: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" },
];

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-around">
      {products.map((product, index) => {
        console.log("Product:", product); // Logging each product to the console
        return (
          <Card key={index} sx={{ maxWidth: 120, margin: 1 }}>
            <CardMedia
              component="img"
              height="80"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography component="div" align="center" sx={{fontSize:"12px"}} >
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
