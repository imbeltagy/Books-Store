import { ListItem, Link as MuiLink } from "@mui/material";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { text: "Home", href: "/" },
  { text: "Categories", href: "/categories" },
  { text: "About us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "FAQs", href: "/faqs" },
];

const navLinkStyle = {
  cursor: "pointer",
  color: "text.primary",
  width: "100%",
  "& span": {
    display: "inline-block",
    letterSpacing: ".05em",
    padding: "0 .1rem .3rem",
    textDecoration: "none",
    position: "relative",
    whiteSpace: "nowrap",
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: "0",
      right: "0",
      width: "0",
      height: "2px",
      borderRadius: "1px",
      bgcolor: "text.primary",
      transition: "width .3s",
    },
  },
  "&:hover span::before, &.active span::before": {
    width: "100%",
    left: 0,
    right: "auto",
  },
  "&.active": {
    fontWeight: "700",
  },
};

const Nav = ({ customListItemStyles }) => {
  const pathname = usePathname();

  return navItems.map(({ text, href }) => (
    <ListItem key={text} sx={customListItemStyles}>
      <MuiLink className={pathname == href ? "active" : ""} sx={navLinkStyle} component={RouterLink} href={href}>
        <span>{text}</span>
      </MuiLink>
    </ListItem>
  ));
};

export default Nav;
