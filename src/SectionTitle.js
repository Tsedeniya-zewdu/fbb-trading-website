import React from 'react'
import { Box, Typography } from '@mui/material'

export default function SectionTitle({
  text,
  variant = 'h4',
  lineColor = '#E87A06',
  lineHeight = 32,
  lineWidth = 6,
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box
        sx={{
          width: lineWidth,
          height: lineHeight,
          backgroundColor: lineColor,
          borderRadius: 1,
          flexShrink: 0,
        }}
      />
      <Typography variant={variant} sx={{ fontWeight: 700 }}>
        {text}
      </Typography>
    </Box>
  )
}
