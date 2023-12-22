import { Box, Container, Grid, Typography } from "@mui/material";
import FAQs from "./page-sections/faqs-section.js";
import Image from "next/image.js";

const DisplayImage = () => (
  <Box
    sx={{
      marginInline: "auto",
      maxWidth: "90%",
    }}
  >
    <Image
      src="/FAQs/hero.svg"
      alt="display image"
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        filter: "drop-shadow(0 0 10px var(--accent))",
      }}
      width={500}
      height={500}
    />
  </Box>
);

const Headding = () => (
  <Box marginInline="auto" textAlign="center" mb="1rem">
    <Typography color="var(--accent)" mb=".5rem" variant="h2" fontWeight="500" component="h1">
      FAQs
    </Typography>

    <Typography whiteSpace="balance" letterSpacing=".05em" lineHeight="1.7">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s.
    </Typography>
  </Box>
);

export default function Home() {
  return (
    <Box className="bg-dark" component="main" flexGrow="1" display="flex" alignItems="center">
      <Container>
        <Grid container alignItems="center" spacing="2rem" pb="5rem" mt="0">
          <Grid item xs={12} md={6}>
            <DisplayImage />
          </Grid>

          <Grid item xs={12} md={6}>
            <Headding />
            <FAQs />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
