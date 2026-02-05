
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import {  Box } from '@mui/material'
import Services from './Services';
import Works from './Works';
import AboutUs from './AboutUs';
function App() {
  return (
   <Box sx={{display:'flex', flexDirection:'column',gap:2,justifyContent:'center', alignItems:'center',maxWidth:'1920px', margin:'0 auto'}}>
      <NavBar />
     <Home />
     <Services />
     <Works />
     <AboutUs />

   </Box>
  );
}

export default App;
