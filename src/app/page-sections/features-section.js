import {
  AttachMoneyOutlined,
  AutoAwesomeOutlined,
  ShoppingCartOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Fragment } from "react";

const features = [
  {
    icon: <AttachMoneyOutlined />,
    headding: "Affordable price",
    content: "Lorem ipsum dolor sit consectetur.",
  },
  {
    icon: <AutoAwesomeOutlined />,
    headding: "Best quality",
    content: "Lorem ipsum dolor sit consectetur.",
  },
  {
    icon: <SupportAgentOutlined />,
    headding: "24/7 customer service",
    content: "Lorem ipsum dolor sit consectetur.",
  },
  {
    icon: <ShoppingCartOutlined />,
    headding: "Free delivery",
    content: "Lorem ipsum dolor sit consectetur.",
  },
];

const smUp = "@media (min-width: 600px)";
const mdUp = "@media (min-width: 900px)";

const SingleFeature = ({ icon, headding, content }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingBlock: "2rem",
        [smUp]: { paddingBlock: "2rem" },
        [mdUp]: { paddingBlock: "3rem" },
      }}
    >
      <Box
        bgcolor="#fff"
        borderRadius="10rem"
        marginInline="auto"
        width="3.5rem"
        height="3.5rem"
        display="grid"
        sx={{ placeItems: "center" }}
      >
        {icon}
      </Box>
      <Typography color="#fff" fontSize="1.1rem" letterSpacing=".05em" mt="1rem" mb=".4rem" fontWeight="700">
        {headding}
      </Typography>
      <Typography color="#fff">{content}</Typography>
    </Box>
  );
};

const Features = () => {
  return (
    <section className="bg-dark">
      <Container>
        <Grid container paddingBlock={"1.5rem"}>
          {features.map((item) => (
            <Fragment key={item.headding}>
              <Grid item xs={12} sm={6} md={3}>
                <SingleFeature {...item} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
