import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "30% 65%",
        },
        gap: 2,
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "#FEC487",
          
        }}
      >
        <SectionTitle text="Contact Us" />

        <Box
          sx={{
            mt: 5,
            display: "flex",
            alignItems: "center",
          
          
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 6,
              alignItems: "start",
             
            
             
            }}
          >
            <p style={{ margin: 0 }}> <strong>Phone:</strong></p>
            <Box>
              <p style={{ margin: 0 }}><strong>09-11-11-11-11</strong></p>
              <p style={{ margin: 0 }}><strong>09-21-20-20-11</strong></p>
            </Box>

            <p style={{ margin: 0 }}> <strong>Telegram:</strong></p>
            <p style={{ margin: 0 }}><strong>@th.telegram.eny</strong></p>
          </Box>
        </Box>
      </Box>

     <Box
  sx={{

    p: 4,
  }}
>
  <SectionTitle text="Location" />

  <Box
    sx={{
      mt: 2,
      width: "100%",
      height: 250,
      borderRadius: 2,
      overflow: "hidden",
      border: "1px solid #ddd",
    }}
  >
    <iframe
      title="Company Location"
      src="https://www.openstreetmap.org/export/embed.html?bbox=38.740%2C9.000%2C38.780%2C9.030&layer=mapnik&marker=9.015%2C38.760"
      style={{ border: 0, width: "100%", height: "100%" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Box>
</Box>

    </Box>
  );
}
