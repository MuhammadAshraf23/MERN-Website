
import { Box } from '@mui/material';
import './App.css';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import HeroSection from './components/HeroSection';

function App() {
  

  return (
   <>
   <Header />
  <Box sx={{backgroundColor:"#f3f3f3",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
<Home />
<HeroSection/>
  </Box>
   </>
  )
}

export default App
