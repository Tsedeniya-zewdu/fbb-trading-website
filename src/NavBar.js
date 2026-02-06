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
        transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 150ms ease, color 150ms ease',
    '&:hover': {
      bgcolor:'#E87A06',
      color:'#FFFFFF',
     borderRadius: 1,
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
     
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
