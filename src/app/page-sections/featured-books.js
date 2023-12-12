import { Box, Card, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const books = [
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
  },
];

const Book = ({ title, subtitle, cover, price }) => {
  return (
    <Card sx={{ border: ".2rem solid #000", borderRadius: 0, boxShadow: ".2rem .2rem #000" }}>
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
  );
};

const FeaturedBooks = () => {
  return (
    <section style={{ position: "relative" }}>
      {/* Black Background */}
      <Box className="bg-dark" height="12.5rem" width="100%" position="absolute"></Box>

      {/* Books */}
      <Container sx={{ position: "relative" }}>
        <Grid container justifyContent="center" spacing="2rem">
          {books.map((item, i) => (
            <Fragment key={i}>
              <Grid item xs={9} sm={4.2} md={3}>
                <Book {...item} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedBooks;
