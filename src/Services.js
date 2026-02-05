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


export default function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        py: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionTitle text="Our Services" />

      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: "100%", md: "90%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<CheckroomIcon sx={{ fontSize: 34, color: "#fff" }} />}
            title="T-Shirt & Apparel Printing"
            description="Custom printing for T-shirts, caps, and branded apparel, ideal for uniforms, promotions, and events."
            headerBg="linear-gradient(
  180deg,
  #02579D 0%,
  #287AC4 47%,
  #66A0DD 100%
)"
            headerColor="#fff"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<LocalShippingIcon sx={{ fontSize: 34, color: "#0A2540" }} />}
            title="Sanitary Materials Supply"
            description="Reliable supply of sanitary and hygiene products to keep offices, institutions, and workplaces clean and safe."
            headerBg="linear-gradient(
  180deg,
  #AAC5E9 0%,
  #CBDBF1 47%,
  #E4EAF6 100%
)"

          />
        </Grid>

        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<StampIcon sx={{ fontSize: 34, color: "#ffff" }} />}
            title="Stamp & Seal Making"
            description="High-quality official stamps and seals for businesses, organizations, and administrative use."
            headerBg="linear-gradient(
  180deg,
  #02579D 0%,
  #287AC4 47%,
  #66A0DD 100%
)"
headerColor="#fff"
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: "100%", md: "90%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<CreateIcon sx={{ fontSize: 34, color: "#fff" }} />}
            title="Stationery Supply"
            description="Complete office stationery solutions to support daily business, school, and institutional needs."
            headerBg="linear-gradient(
  180deg,
  #02579D 0%,
  #287AC4 47%,
  #66A0DD 100%
)"
            headerColor="#fff"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<MenuBookIcon sx={{ fontSize: 34, color: "#0A2540" }} />}
            title="Book, Brochure & Document Printing"
            description="Professional printing of books, brochures, receipts, invoices, and other essential business documents."
            headerBg="linear-gradient(
  180deg,
  #AAC5E9 0%,
  #CBDBF1 47%,
  #E4EAF6 100%
)"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <ServiceCard
            icon={<BusinessIcon sx={{ fontSize: 34, color: "#ffff" }} />}
            title="Business Cards & Branding Materials"
            description="Creative branding and promotional materials to help your business stand out professionally."
            headerBg="linear-gradient(
  180deg,
  #02579D 0%,
  #287AC4 47%,
  #66A0DD 100%
)"
headerColor="#fff"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
