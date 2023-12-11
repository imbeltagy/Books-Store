"use client";

import Nav from "@/components/header/nav";
import { Container, List, Stack } from "@mui/material";

const Footer = () => {
  return (
    <section className="bg-light" style={{ borderTop: ".2rem solid var(--black)", paddingBlock: "2rem" }}>
      <Container>
        <List>
          <Stack
            gap="1rem"
            justifyContent="center"
            width="fit-content"
            marginInline="auto"
            flexWrap="wrap"
            direction="row"
          >
            <Nav customListItemStyles={{ width: "fit-content" }} />
          </Stack>
        </List>
      </Container>
    </section>
  );
};

export default Footer;
