import { useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import SectionTitle from "./SectionTitle";

const workSamples = [
  { id: 1, src: 'image/images.jfif', title: 'Brochure Printing' },
  { id: 2, src: 'image/images2.jfif', title: 'Business Cards' },
    { id: 3, src: 'image/images.jfif', title: 'Brochure Printing' },
  { id: 4, src: 'image/images2.jfif', title: 'Business Cards' },
    { id: 5, src: 'image/images.jfif', title: 'Brochure Printing' },
  { id: 6, src: 'image/images2.jfif', title: 'Business Cards' },
   { id: 7, src: 'image/images2.jfif', title: 'Business Cards' },
    { id: 8, src: 'image/images.jfif', title: 'Brochure Printing' },
  { id: 9, src: 'image/images2.jfif', title: 'Business Cards' },
];
const ITEMS_PER_PAGE = 6;

export default function Works() {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(workSamples.length / ITEMS_PER_PAGE);

  const visibleItems = workSamples.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        px: 2,
        py: 2,
        width: "100%",
      }}
    >
      <SectionTitle text="Our Works" />

     
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {visibleItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: { xs: 260, sm: 380, md: 500 },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 500,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            <Typography variant="h6" textAlign="center">
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

  
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          size="large"
        />
      )}
    </Box>
  );
}
