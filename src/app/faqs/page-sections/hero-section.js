import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const mdDown = "@media (max-width: 899px)";

const About = () => {
  return (
    <Grid container alignItems="center" columnSpacing="2rem" rowSpacing="5rem" pb="5rem" mt="0">
      {/* Image */}
      <Grid item xs={12}>
        <Box
          sx={{
            [mdDown]: {
              marginInline: "auto",
              width: "min(90vw, 22rem)",
            },
          }}
        >
          <Image
            src="/FAQs/hero.svg"
            alt="display image: a man reading a book"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "25rem",
              position: "relative",
              filter: "drop-shadow(0 0 10px var(--accent))",
            }}
            width={500}
            height={500}
          />
        </Box>
      </Grid>

      {/* Text */}
      <Grid item xs={12}>
        <Box
          sx={{
            [mdDown]: {
              marginInline: "auto",
              textAlign: "center",
            },
          }}
        >
          <Typography color="var(--accent)" mb=".3rem" variant="h2" fontWeight="500" component="h1">
            FAQs
          </Typography>

          <Typography sx={{ whiteSpace: "balance", letterSpacing: ".05em", lineHeight: "1.7" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
