import { Box, Input, InputBase, styled } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import React from 'react'

export default function Search() {

    const SearchContainer= styled(Box)
    ` background: #fff;
    width:40%;
    border-radius:3px;
    margin-left:10px;
    display:flex;
    `

    const InputSearchBase=styled(InputBase)
    `padding-left:20px;
    width:100%;`
  return (
    <SearchContainer >
        

        <InputSearchBase  placeholder='Search for products, brands and more' />
     
        <SearchIcon style={{color:'blue',padding:5}}/>

      
    </SearchContainer>
  )
}
