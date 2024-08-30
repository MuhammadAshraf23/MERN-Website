import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://via.placeholder.com/150',
    price: '$10',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/150',
    price: '$20',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://via.placeholder.com/150',
    price: '$30',
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://via.placeholder.com/150',
    price: '$40',
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'https://via.placeholder.com/150',
    price: '$50',
  },
];

export default function SmartPhone() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
