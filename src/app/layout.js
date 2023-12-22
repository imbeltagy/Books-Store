import "./globals.css";
import { Inter } from "next/font/google";
import { Box, CssBaseline, Stack } from "@mui/material";
import Header from "@/components/header/index";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stack minHeight="100svh">
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </Stack>
      </body>
    </html>
  );
}
