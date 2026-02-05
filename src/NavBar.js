import React from 'react'
import { AppBar, Box, Link } from '@mui/material'

export default function NavBar() {
    const links=[{name:'HOME',href:'#'},{name:'SERVICES',href:'#'},{name:'PREVIOUS WORK',href:'#'},{name:'ABOUT',href:'#'},{name:'CONTACT US',href:'#'}]
  return (
 <AppBar component="nav" elevation={0} sx={{display:'flex', flexDirection:'row', alignItems:'center', bgcolor:'#F5F5F5', color:'#000000', height:60, justifyContent:'space-between', px:"4%",py:3}}>
  <Box
    sx={{
      width: 70,
      height: 60,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
        <Box
      component="img"
      src="/image/logo.png"
      alt="Logo"
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
      }}
    />
      </Box>
      <Box sx={{display:'flex', gap:2}}>
        {links.map((link)=> (
          <Link
  key={link}
  underline="none"
  color="inherit"
  sx={{
    
    fontWeight: 500,
    position: 'relative',
    cursor: 'pointer',
p:2,
    '&:hover': {
      bgcolor:'#005B9B',
      color:'#FFFFFF',
     
     
    },
  }}
>
  {link.name}
</Link>
        ))}
        
      </Box>
    </AppBar>   
  )
} 
