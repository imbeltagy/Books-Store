"use client";
import { Box, ButtonBase, Card, CardHeader, CardMedia, Typography } from "@mui/material";

const BookCard = ({ title, subtitle, thumbnail, smallThumbnail, price, previewLink, fullHeight }) => {
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
        height: fullHeight && "100%",
        width: "100%",
      }}
      component="a"
      href={previewLink}
      target="_blank"
    >
      <Card
        sx={{
          backgroundColor: "#0000",
          borderRadius: 0,
          border: ".2rem solid #000",
          height: fullHeight && "100%",
          bgcolor: "#fff",
          width: "100%",
        }}
        elevation={0}
      >
        {/* Thumbnail */}
        <Box width="100%" opacity="0" position="relative">
          <CardMedia
            component="img"
            loading="lazy"
            image={smallThumbnail}
            alt={title}
            sx={{ aspectRatio: "310 / 500" }}
          />
          <CardMedia
            component="img"
            loading="lazy"
            image={thumbnail}
            alt={title}
            sx={{ aspectRatio: "310 / 500", position: "absolute", top: 0, opacity: 0, transition: "opacity .5s" }}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
        </Box>

        {/* Price */}
        <Box position="relative" className="bg-dark" width="5.5rem" height="3rem" mt="-3rem" ml="auto">
          <Typography variant="h6" lineHeight="3rem" textAlign="center">
            {price}
          </Typography>
        </Box>

        {/* Title & SubTitle */}
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
