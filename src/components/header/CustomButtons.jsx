import { Box, Button, Typography, styled } from "@mui/material";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useState } from "react";


const Wrapper = styled(Box)`
display: flex;
align-items: center;
justify-content: space-around;
color:black;
width:80%;
`;

const ItemBox = styled(Box)`
display: flex;
align-items: center;
margin-left: 16px; /* Adjust spacing between items */
cursor:pointer;
`;


export default function CustomButtons() {
  const [open,setOpen] =useState(false)
  return (
    <Wrapper>
      <ItemBox>
        <Profile open={open} setOpen={setOpen}/>
      </ItemBox>

      <ItemBox>
        <ShoppingCartOutlinedIcon />
        <Typography>Cart</Typography>
      </ItemBox>

      <ItemBox>
        <StorefrontIcon />
        <Typography style={{ width: 135,paddingLeft:8 }}>Become a Seller</Typography>
      </ItemBox>
      <ItemBox sx={{color:'black', padding:1,'&:hover': {
          backgroundColor: '#efefef',
          borderRadius:1
        },}}>
      <MoreVertOutlinedIcon  />
      <LoginDialog open={open} setOpen={setOpen}/>
      </ItemBox>
    </Wrapper>
  );
}
