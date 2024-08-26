import { Box ,Button, Typography} from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function CustomButtons() {
  return (
    <Box style={{display:'flex'}}>
       
  <Button variant='contained'>Login </Button>
  <Typography>Become a Seller</Typography>
  <Typography>More</Typography>

  <Box>
<ShoppingCartIcon/>
  </Box>
    </Box>
  )
}
