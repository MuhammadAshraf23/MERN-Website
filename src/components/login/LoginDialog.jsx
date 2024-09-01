import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginDialog({ open, setOpen }) {
    const Component = styled(Box)`
      height: 70vh;
      width: 90vh;
      display: flex;
    `;
  
    const Image = styled(Box)`
      background: #2874f0
        url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
        center 85% no-repeat;
      height: 100%;
      width: 40%; /* Adjusted width */
      padding: 40px 35px;
      color: #fff;
    `;
  
    const Wrapper = styled(Box)`
      padding: 20px 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60%; /* Adjusted width */
    `;
  
    const LoginButton = styled(Button)`
      background-color: #fb641b;
      color: white;
      margin-top: 20px;
      &:hover {
        background-color: #e7530e;
      }
    `;
  
    const RequestOtpButton = styled(Button)`
      margin-top: 20px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    `;
  
    const TypographyLink = styled(Typography)`
      font-size: 14px;
      margin-top: 40px;
      text-align: center;
      cursor: pointer;
      color: #2874f0;
    `;
    const accountInitialValue={
      login:{
          view:'login',
          heading:'Login',
          subHeading:'Get access to your orders, wishlist, and recommendations'

      }, 
        signup:{
          view:'signup',
          heading:"Looks Like you're new here!",
          subHeading:'Signup with your mobile to get started'
      }
  }
  const [account ,setAccount]=useState(accountInitialValue.login)
  const handleClose = () => {
    setOpen(false);
  };
  const toggleAccount=()=>{
      setAccount(accountInitialValue.signup)
  }

    return (
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Component>
          <Image>
              
            <Typography variant="h5" style={{fontWeight:'bold'}}>{account.heading}</Typography>
            <Typography sx={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view ==='login' ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email / Phone Number"
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                type="password"
                fullWidth
                sx={{ marginBottom: "14px" }}
              />
              <Typography sx={{ fontSize: "12px", }}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <LoginButton variant="contained" fullWidth>
                Login
              </LoginButton>
              <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
                OR
              </Typography>
              <RequestOtpButton variant="outlined" fullWidth>
                Request OTP
              </RequestOtpButton>
              <TypographyLink onClick={()=>toggleAccount()}>
                New to Flipkart? Create an account
              </TypographyLink>
            </Wrapper>
          ) :(
            <Wrapper>
              
              <TextField
                variant="standard"
                label="First Name"
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                variant="standard"
                label="Last Name"
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                variant="standard"
                label="Email"
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                variant="standard"
                label="Password"
                type="password"
                fullWidth
                sx={{ marginBottom: "14px" }}
              />
              <TextField
                variant="standard"
                label="Phone Number"
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <LoginButton>Continue</LoginButton>
            </Wrapper>
          )}
        </Component>
      </Dialog>
    );
  }
