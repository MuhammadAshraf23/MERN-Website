
import { Box } from '@mui/material';
import './App.css';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import 'react-slideshow-image/dist/styles.css'

function App() {
  

  return (
   <>
   <Header />
  <Box sx={{backgroundColor:"#f3f3f3",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%'}}>
<Home />
  </Box>
   </>
  )
}

export default App
