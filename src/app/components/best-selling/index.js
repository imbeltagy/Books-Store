import { Star } from "@mui/icons-material";
import { Box, Button, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

const lgUp = "@media (min-width: 1200px)";
const mdDown = "@media (max-width: 899px)";

const BestSelling = () => {
  return (
    <section className="bg-dark">
      <Container>
        <Grid container rowSpacing="3rem" columnSpacing="5rem" mt={0} pt="4rem" pb="7rem" justifyContent="center">
          {/* Image */}
          <Grid item sx={12} md={5} lg={4}>
            <Image
              src="/best-selling.jpg"
              alt="Book Cover"
              width="310"
              height="500"
              style={{ border: ".2rem solid #fff", width: "100%", height: "auto" }}
            />
          </Grid>

          {/* Text */}
          <Grid item sx={12} md={7} lg={6}>
            <Stack
              color="#fff"
              spacing="1.2rem"
              alignItems="flex-start"
              sx={{
                [mdDown]: {
                  width: "min(30rem, 100%)",
                  textAlign: "center",
                  alignItems: "center",
                  marginInline: "auto",
                },
              }}
            >
              {/* Title */}
              <Typography
                sx={{ lineHeight: 1.2, [lgUp]: { lineHeight: 1.5 } }}
                fontWeight="900"
                letterSpacing=".02em"
                variant="h2"
              >
                Best Selling Book of the Month
              </Typography>

              {/* Rating Row */}
              <Stack direction="row" gap=".5rem" alignItems="center">
                <Typography variant="caption" pt=".2em" component="span">
                  4.7
                </Typography>
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  size="small"
                  emptyIcon={<Star style={{ opacity: 0.5, color: "#fff" }} fontSize="inherit" />}
                />
                <Typography variant="caption" pt=".2em" sx={{ opacity: 0.6 }} component="span">
                  (321)
                </Typography>
              </Stack>

              {/* Book Info */}
              <Box pb=".3rem">
                <Typography variant="h6" opacity=".7">
                  Zero to one, how to build the future
                </Typography>
                <Typography variant="subtitle1" fontWeight="700">
                  By Peter Thiel
                </Typography>
              </Box>

              {/* C2A Button */}
              <Button variant="contained" sx={{ paddingInline: "2.5rem" }}>
                Buy Now
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BestSelling;
