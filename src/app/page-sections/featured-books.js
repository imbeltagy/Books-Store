import BookCard from "@/components/book-card";
import { Box, Container, Grid } from "@mui/material";
import { Fragment } from "react";

const books = [
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
    bookPage: "",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
    bookPage: "",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
    bookPage: "",
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    cover: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    price: "$12.00",
    bookPage: "",
  },
];

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
                <BookCard {...item} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedBooks;
