import { Avatar, AvatarGroup, Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const avatars = [
  "https://mui.com/static/images/avatar/1.jpg",
  "https://mui.com/static/images/avatar/2.jpg",
  "https://mui.com/static/images/avatar/5.jpg",
  "https://mui.com/static/images/avatar/6.jpg",
  "",
  "",
];

const heroImg = "/home/hero.svg";

const mdUp = "@media (min-width: 900px)";
const mdDown = "@media (max-width: 899px)";

const Hero = () => {
  return (
    <Box className="bg-light" paddingBlock="3rem" component="main">
      <Container>
        <Stack sx={{ [mdUp]: { flexDirection: "row" } }} flexWrap="nowrap" alignItems="center" spacing="1rem">
          {/* Text */}
          <Box width="100%" sx={{ [mdDown]: { order: 1 } }}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  textAlign: "center",
                  width: "min(90vw, 30rem)",
                },
              }}
            >
              <Typography
                fontWeight="900"
                sx={{ [mdDown]: { fontSize: "2.8rem" } }}
                mb="1rem"
                variant="h2"
                component="h1"
              >
                Feast your eyes on a good book!
              </Typography>
              <Typography
                fontSize="1.2rem"
                letterSpacing=".07em"
                sx={{ opacity: 0.7, [mdUp]: { lineHeight: 1.3 } }}
                mb="1.5rem"
              >
                Lorem ipsum dolor sit amet consectetur. Diam tempor leo sem pulvinar orci pharetra.
              </Typography>

              {/* C2A Button & Avatars */}
              <Stack
                direction="row"
                alignItems="flex-end"
                sx={{ [mdDown]: { justifyContent: "center" } }}
                gap="1rem"
                flexWrap="wrap"
              >
                <Button sx={{ whiteSpace: "nowrap" }} size="large" variant="contained">
                  Start Exploring
                </Button>

                <AvatarGroup
                  sx={{
                    "& .MuiAvatar-root": {
                      borderColor: "var(--black)",
                      width: "2.2rem",
                      height: "2.2rem",
                      bgcolor: "var(--accent)",
                      color: "var(--black)",
                      fontSize: "1.2rem",
                    },
                  }}
                  max={5}
                >
                  {avatars.map((avatar) => (
                    <Avatar src={avatar} alt="client picture" key={avatar} />
                  ))}
                </AvatarGroup>
              </Stack>
            </Box>
          </Box>

          {/* Image */}
          <Box width="100%" sx={{ [mdDown]: { order: 1 } }}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  width: "min(90vw, 22rem)",
                },
              }}
            >
              <Image
                src={heroImg}
                alt="display image: a man reading a book"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={500}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
