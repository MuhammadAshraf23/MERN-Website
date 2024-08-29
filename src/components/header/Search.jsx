import { Box, Input, InputBase, styled } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import React from 'react'

export default function Search() {

  const SearchContainer = styled(Box)
   `background: #f0f5ff;
    width:100%;
    border-radius:3px;
    margin-left:30px;
    display:flex;
    color:black;

    `
  return (
    <SearchContainer >
      <SearchIcon style={{ color: 'gray', padding: 5,fontSize:'40px' }} />
      <InputBase placeholder='Search for products, brands and more' style={{ padding: '0px 4px', width: '100%',fontSize:'19px', }} />
    </SearchContainer>
  )
}
