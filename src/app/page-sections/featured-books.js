// import BookCard from "@/components/book-card";
import { Box, Container, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const books = [
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    thumbnail: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    smallThumbnail: "https://covers.openlibrary.org/b/id/6943154-S.jpg",
    price: "$12.00",
    previewLink: `https://openlibrary.org`,
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    thumbnail: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    smallThumbnail: "https://covers.openlibrary.org/b/id/6943154-S.jpg",
    price: "$12.00",
    previewLink: `https://openlibrary.org`,
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    thumbnail: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    smallThumbnail: "https://covers.openlibrary.org/b/id/6943154-S.jpg",
    price: "$12.00",
    previewLink: `https://openlibrary.org`,
  },
  {
    title: "Zero to one",
    subtitle: "by Peter Thiel",
    thumbnail: "https://covers.openlibrary.org/b/id/6943154-L.jpg",
    smallThumbnail: "https://covers.openlibrary.org/b/id/6943154-S.jpg",
    price: "$12.00",
    previewLink: `https://openlibrary.org`,
  },
];

const BookCard = dynamic(() => import("@/components/book-card"), {
  ssr: false, // Disable server-side rendering for this component
});

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
