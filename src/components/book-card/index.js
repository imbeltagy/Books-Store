import { Box, ButtonBase, Card, CardHeader, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

const BookCard = ({ title, subtitle, cover, price, bookPage }) => {
  return (
    <ButtonBase
      sx={{
        textDecoration: "none",
        boxShadow: ".2rem .2rem #000",
        transform: "scale(1)",
        transition: "box-shadow .3s, transform .3s",
        "&:hover": {
          boxShadow: "0 0 #000",
          transform: "scale(1.05)",
        },
      }}
      component={Link}
      href={bookPage}
    >
      <Card sx={{ backgroundColor: "#0000", borderRadius: 0, border: ".2rem solid #000" }} elevation={0}>
        <CardMedia component="img" image={cover} alt={title} sx={{ aspectRatio: "310 / 500" }} />
        <Box position="relative" className="bg-dark" width="5.5rem" height="3rem" mt="-3rem" ml="auto">
          <Typography variant="h6" lineHeight="3rem" textAlign="center">
            {price}
          </Typography>
        </Box>
        <CardHeader
          title={title}
          titleTypographyProps={{ variant: "h6", fontWeight: "900", component: "span" }}
          subheader={subtitle}
          sx={{ p: ".4rem .8rem" }}
        />
      </Card>
    </ButtonBase>
  );
};

export default BookCard;