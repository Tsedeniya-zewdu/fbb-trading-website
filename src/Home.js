import React from 'react'
import {  Box, Button, Typography } from '@mui/material'

export default function Home() {
    
  return (

     <Box
      sx={{
        mt: 10,
        width: '100vw',
        height: '75vh',
        position: 'relative',
        backgroundImage: 'url(/image/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)', 
        }}
      />
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:2
        }}
      >
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          
        }}
      >
        FBB TRADING
      </Typography>
      <Typography  variant="h5"
        sx={{
          color: '#fff',
        
          
        }}>High-Quality Printing Services for Your Business</Typography>
        <Button sx={{variant: 'contained', m: 5,p:2, bgcolor:'black',color:'white' }}> <Typography variant='h6' >CONTACT US</Typography></Button>
        </Box>
    </Box>
  )
}
 