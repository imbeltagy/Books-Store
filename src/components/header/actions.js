import { LogoutOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

const Actions = () => {
  return (
    <Stack direction="row" alignItems="center" gap=".5rem">
      <IconButton LinkComponent={Link} href="/" aria-label="open cart">
        <ShoppingCartOutlined />
      </IconButton>
      <IconButton aria-label="logout">
        <LogoutOutlined />
      </IconButton>
    </Stack>
  );
};

export default Actions;
