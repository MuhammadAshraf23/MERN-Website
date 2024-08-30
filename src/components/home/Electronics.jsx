import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
    price: "$10",
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
    price: "$20",
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
    price: "$30",
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
    price: "$40",
  },
  {
    id: 5,
    name: "Product 5",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
    price: "$50",
  },

];

export default function ProductFlex() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        gap: 2,
        padding: 2,
        overflowX: "auto",
        background: "#ffff",
        width:'100%'
      }}
    >
    <Box>
    <Typography variant="h6" component="div">
                Best Deals on Smart Phones
              </Typography>
   
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            width: "100%",
            padding: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Card>
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
           <Box
       
          sx={{
            width: "100%",
            padding: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <img src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/32e8514665f65267.jpg?q=20" alt="" style={{width:'190px'}}/>
        </Box>
    </Box>
    </Box>
  );
}
