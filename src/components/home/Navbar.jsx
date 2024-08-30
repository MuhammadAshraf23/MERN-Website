import React from "react";
import { navData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";

// Styled Components
const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 75px ;
  background-color: #ffff;
  width:100%;
`;

const Container = styled(Box)`
  padding: 12px 8px;
`;

const Text=styled(Typography)`

font-size: 14px;
`
export default function Navbar() {
  return (
    <Component>
      {navData.map((product, index) => (
        <Container key={index}>
          <img src={product.image} alt={`${product.name} icon`} width={64} />
          <Typography>{product.name}</Typography>
        </Container>
      ))}
    </Component>
  );
}
