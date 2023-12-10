"use client";

import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useSidebarStore } from "@/zustand/store";
import Nav from "./nav";
import { Suspense } from "react";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar: close } = useSidebarStore();
  const { breakpoints } = useTheme();
  const isLgScreen = useMediaQuery(breakpoints.up("lg"));

  if (isLgScreen)
    return (
      <Suspense>
        <Nav />
      </Suspense>
    );

  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={() => close()}>
      <Suspense>
        <Nav />
      </Suspense>
    </Drawer>
  );
};

export default Sidebar;
