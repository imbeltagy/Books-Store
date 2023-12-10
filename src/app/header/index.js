"use client";

import { Menu } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Container,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Actions from "./actions";
import Nav from "./nav";

// Main Component
const Header = () => {
  const { breakpoints } = useTheme();
  const bigScreens = breakpoints.up("lg");
  const isCollapeseDisabled = useMediaQuery(bigScreens);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <Box sx={{ borderBottom: ".2rem solid" }}>
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: !isCollapeseDisabled && "wrap",
            pt: "1.5rem",
            [bigScreens]: { paddingBlock: "1rem" },
          }}
        >
          {/* Menu Button & Brand */}
          <Stack direction="row" alignItems="center">
            {!isCollapeseDisabled ? (
              <IconButton onClick={() => toggleOpen()}>
                <Menu />
              </IconButton>
            ) : null}

            <Typography variant="h5" fontWeight="600" letterSpacing=".05em" component="span">
              BOOKSHOP
            </Typography>
          </Stack>

          {/* Nav */}

          <Collapse
            sx={{
              order: 3,
              width: "100%",
              flexShrink: 0,
              mb: "1.5rem",
              [bigScreens]: { order: "unset", width: "unset", mb: 0 },
            }}
            collapsedSize={0}
            in={isCollapeseDisabled ? true : isOpen}
          >
            <List>
              <Stack
                {...(isCollapeseDisabled ? { direction: "row", justifyContent: "center" } : { gap: "1rem" })}
                component="nav"
              >
                <Nav />
              </Stack>
            </List>
          </Collapse>

          {/* Actions */}
          <Actions />
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Header;
