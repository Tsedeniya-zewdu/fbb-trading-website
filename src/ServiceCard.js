import { Card, Box, Typography } from "@mui/material";

export default function ServiceCard({
  icon,
  title,
  description,
  headerBg = "#EAF2FF",
  headerColor = "#0A2540",
}) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        height: "200px",
        width: { xs: '300px',sm:'400px', md: '500px' },
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: headerBg,
          px: 3,
          py: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {icon}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: headerColor }}
        >
          {title}
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ px: 3, py: 3 }}>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.7 }}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
