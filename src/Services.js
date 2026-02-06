import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StampIcon from "@mui/icons-material/Approval";
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessIcon from '@mui/icons-material/Business';

const headerColor = "#E87A06"; 
const iconColor = "#fff";

export default function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        px: 3,
        py: 4,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFBFD",
      }}
    >
      <SectionTitle text="Our Services" />

      <Grid
        container
        spacing={4}
        sx={{
          width: { xs: "100%", md: "90%" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<CheckroomIcon />}
            title="T-Shirt & Apparel Printing"
            description="Custom printing for T-shirts, caps, and branded apparel, ideal for uniforms, promotions, and events."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<LocalShippingIcon />}
            title="Sanitary Materials Supply"
            description="Reliable supply of sanitary and hygiene products to keep offices, institutions, and workplaces clean and safe."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<StampIcon />}
            title="Stamp & Seal Making"
            description="High-quality official stamps and seals for businesses, organizations, and administrative use."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<CreateIcon />}
            title="Stationery Supply"
            description="Complete office stationery solutions to support daily business, school, and institutional needs."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<MenuBookIcon />}
            title="Book, Brochure & Document Printing"
            description="Professional printing of books, brochures, receipts, invoices, and other essential business documents."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<BusinessIcon />}
            title="Business Cards & Branding Materials"
            description="Creative branding and promotional materials to help your business stand out professionally."
            headerBg={headerColor}
            headerColor="#fff"
            iconColor={iconColor}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
