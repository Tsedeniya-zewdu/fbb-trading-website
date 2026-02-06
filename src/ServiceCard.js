import { Card, Box, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  headerBg = "#4A90E2", 
  headerColor = "#fff",
  iconColor = "#fff",
}) {
  return (
    <Card
      sx={{
        borderRadius: 12,
        overflow: "hidden",
        height: 300, 
        width: { xs: 300, sm: 360, md: 380 },
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 14px 28px rgba(0, 0, 0, 0.12)",
          transform: "translateY(-6px)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
     
      <Box
        sx={{
          backgroundColor: headerBg,
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          flexShrink: 0,
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: 36, color: iconColor } })}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: headerColor,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.4rem", md: "1.5rem" },
            letterSpacing: 0.5,
          }}
        >
          {title}
        </Typography>
      </Box>

      
      <Box
        sx={{
          px: 4,
        py:4,
       
      
         
        }}
      >
        <Typography
          variant="body1"
          sx={{
         
            lineHeight: 1.7,
          
            fontFamily: "'Merriweather', serif",
            fontSize: { xs: "1.1rem", md: "1.15rem" },
            fontWeight: 500,
            fontStyle: "italic",
            letterSpacing: 0.3,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
