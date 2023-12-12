import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const mdDown = "@media (max-width: 899px)";

const About = () => {
  return (
    <main className="bg-dark" style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
      <Container>
        <Grid container alignItems="center" columnSpacing="2rem" rowSpacing="5rem" pb="5rem" mt="0">
          {/* Text */}
          <Grid item xs={12} md={6} sx={{ [mdDown]: { order: 1 } }}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  textAlign: "center",
                },
              }}
            >
              <Typography color="var(--accent)" mb=".3rem" variant="h2" fontWeight="500" component="h1">
                About us
              </Typography>

              <Typography sx={{ whiteSpace: "balance", letterSpacing: ".05em", lineHeight: "1.7" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  width: "min(90vw, 22rem)",
                },
                position: "relative",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  height: "130%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  aspectRatio: "1/1",
                  borderRadius: "100%",
                  bgcolor: "rgba(251, 200, 42, .35)",
                },
              }}
            >
              <Image
                src="/about/hero.svg"
                alt="display image: a man reading a book"
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                }}
                width={500}
                height={500}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default About;
