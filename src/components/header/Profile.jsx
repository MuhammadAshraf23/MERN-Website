
import React, { useContext } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { DataContext } from "../../context/DataProvider";
import { Button, Typography } from "@mui/material";
export default function Profile({setOpen}) {
    const openDialog=()=>{
      setOpen(true)
    }
    const {account}=useContext(DataContext)
    console.log("AccountUserName:-",account)
  return (
    <>
    {account ? (
          <Typography>{account}</Typography>
        ) : (
          <Button
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
              },
            }}
            onClick={openDialog}
          >
            <AccountCircleOutlinedIcon sx={{ paddingX: "8px", fontSize: 45 }} />
            Login
          </Button>
        )}
    
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
