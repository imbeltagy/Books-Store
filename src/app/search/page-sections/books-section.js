"use client";

import BookCard from "@/components/book-card";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BooksSection = () => {
  const nameParam = useSearchParams().get("name");
  const [books, setBooks] = useState([]);
  const [noBooksMsg, setNoBooksMsg] = useState("Type the book title then press (Enter) to search books.");
  const [error, setError] = useState();

  // Fetch Books
  useEffect(() => {
    setError(null);
    if (nameParam) {
      // Loading Msg
      setNoBooksMsg("Loading...");

      // Fetch Data
      const fetchBooks = async () => {
        fetch(`https://openlibrary.org/search.json?title=${nameParam}`)
          .then((res) => res.json())
          .then((data) => {
            const booksInfo = data.docs
              // First 8 Books Only
              .filter((item, i) => i < 8)
              // Modify Objects
              .map(({ author_name, title, cover_i, key }) => ({
                title,
                subtitle: author_name ? author_name.reduce((acc, cur) => `${acc}, ${cur}`) : "unknown author",
                smallThumbnail: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-S.jpg` : cover_i,
                thumbnail: cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : cover_i,
                previewLink: `https://openlibrary.org${key}`,
                price: ["FREE", "$15.00", "$12.50", "$4.00", "$18.22"][Math.floor(Math.random() * 5)],
              }));
            setBooks(booksInfo);
          })
          .catch((err) => {
            if (err.message === "Network error") {
              setError(
                "There was a problem with your internet connection. Please check your network settings and try again."
              );
            } else {
              setError("An error occurred while fetching the books. Please try again later.");
            }
          });
      };
      fetchBooks();
    } else {
      // No Search Value
      setBooks([]);
      setNoBooksMsg(
        "Please enter the title of the book and press (Enter) to begin your search for captivating literary treasures."
      );
    }
  }, [nameParam]);

  if (error)
    return (
      <Box className="bg-dark" paddingBlock="3rem">
        <Container>
          <Alert severity="error">{error}</Alert>
        </Container>
      </Box>
    );

  return (
    <Box className="bg-dark" paddingBlock="3rem">
      <Container>
        {/* Message */}
        {books.length == 0 ? (
          <Typography variant="h6" marginInline="auto" component="p">
            {noBooksMsg}
          </Typography>
        ) : null}

        {/* Books */}
        <Grid container justifyContent="center" alignItems="stretch" spacing="2rem">
          {books.map((item, i) => (
            <Grid item xs={9} sm={4.2} md={3} key={i}>
              <BookCard {...item} fullHeight />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BooksSection;
