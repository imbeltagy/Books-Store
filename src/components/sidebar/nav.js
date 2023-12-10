import { Group, Home, Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import Link from "next/link";

const ListItems = [
  { text: "Home Page", icon: <Home />, link: "/" },
  { text: "Friends Asks", icon: <Group />, link: "/" },
  { text: "Account Settings", icon: <Settings />, link: "/" },
];

const Nav = () => (
  <List sx={{ width: "min(95vw, 20rem)", paddingBlock: "1.5rem" }}>
    <Stack spacing={1}>
      {ListItems.map(({ text, icon, link }, i) => (
        <ListItem disablePadding key={i}>
          <ListItemButton component={Link} to={link} onClick={() => close()} sx={{ pl: "1.95rem" }}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </Stack>
  </List>
);

export default Nav;
