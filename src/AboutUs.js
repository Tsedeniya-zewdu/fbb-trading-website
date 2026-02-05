import { Box, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function AboutUs() {
  return (
    <Box
  sx={{
    display: "flex",
    alignItems: "center",
    // width: "100%",
    px: 4,       
    py: 2,
    gap: 5,
    
  }}
>

   
      <Box
        component="img"
        src="image/person.png"
        sx={{
          width: "35%",
          height: "auto",
          objectFit: "contain",
          display: "block",   
          flexShrink: 0,     
        }}
      />

      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <SectionTitle text="About Us" />

        <Typography variant="h6">
            <br />
          We are a proud Ethiopian printing and trading company, bringing your
          ideas to life with high-quality, reliable, and creative solutions.
          From custom T-shirts and business cards to stamps, stationery, and
          branded materials, we deliver precise, durable, and professional
          prints that help your brand stand out.
          <br /><br />
          With modern technology and a skilled team, we focus on quality, speed,
          and tailored service—making your vision a reality while supporting
          local businesses every step of the way.
        </Typography>
      </Box>
    </Box>
  );
}
