import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function CustomButtons() {
  const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const ItemBox = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 16px; /* Adjust spacing between items */
  `;

  return (
    <Wrapper>
      <ItemBox>
        <AccountCircleOutlinedIcon />
        <Button variant="text" color="secondary">
          Login
        </Button>
      </ItemBox>

      <ItemBox>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </ItemBox>

      <ItemBox>
        <StorefrontIcon />
        <Typography style={{ width: 135 }}>Become a Seller</Typography>
      </ItemBox>
    </Wrapper>
  );
}
