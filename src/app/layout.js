import "./globals.css";
import { Inter } from "next/font/google";
import { Box, CssBaseline, Stack } from "@mui/material";
import Header from "@/components/header/index";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beltagy Books Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Stack minHeight="100svh">
          <Header />
          <Box flexGrow={1} display="grid" justifyContent="center" alignItems="center">
            {children}
          </Box>
          <Footer />
        </Stack>
      </body>
    </html>
  );
}
