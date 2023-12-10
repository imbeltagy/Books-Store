import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set((state) => ({ isSidebarOpen: true })),
  closeSidebar: () => set((state) => ({ isSidebarOpen: false })),
}));
