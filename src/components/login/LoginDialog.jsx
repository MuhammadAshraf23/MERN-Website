import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { authenticateSignup } from "../../services/Api";
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
const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders, wishlist, and recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks Like you're new here!",
    subHeading: "Signup with your mobile to get started",
  },
};

const signupInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

export default function LoginDialog({ open, setOpen }) {
  const [loginState, setLoginState] = useState(accountInitialValue.login);
  const [signup,setSignup]=useState(signupInitialValues)

  console.log("sign",signup.firstName)
  const handleClose = () => {
    setOpen(false);
  };
  const toggleAccount = (e) => {
    setLoginState(accountInitialValue.signup);
  };
  
  const handleInputChange=(e)=>{
      const {name,value}=e.target
    setSignup({...signup,[name]:value})
  }

  const signupUser=async()=>{
  const response= await authenticateSignup(signup)
  if(!response) return;
  handleClose();
  }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Component>
        <Image>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {loginState.heading}
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            {loginState.subHeading}
          </Typography>
        </Image>
        {loginState.view === "login" ? (
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
            <Typography sx={{ fontSize: "12px" }}>
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
            <TypographyLink onClick={() => toggleAccount()}>
              New to Flipkart? Create an account
            </TypographyLink>
          </Wrapper>
        ) : (
          <Wrapper>
          <TextField
            variant="standard"
            label="First Name"
            name="firstName"
            value={signup.firstName}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            variant="standard"
            label="Last Name"
            name="lastName"
            value={signup.lastName}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            variant="standard"
            label="Email"
            name="email"
            value={signup.email}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            name="password"
            value={signup.password}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: "14px" }}
          />
          <TextField
            variant="standard"
            label="Phone Number"
            name="phoneNumber"
            value={signup.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
        </Wrapper>
        )}
      </Component>
    </Dialog>
  );
}
