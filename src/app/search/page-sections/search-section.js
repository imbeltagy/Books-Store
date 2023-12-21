"use client";

import { Search } from "@mui/icons-material";
import { Box, Button, InputBase } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";

const SearchSection = () => {
  const searchParams = useSearchParams();
  const inputRef = useRef();
  const pathname = usePathname();
  const router = useRouter();

  const handleSubmit = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const inputVal = inputRef.current.value;
    if (inputVal != "") {
      current.set("name", inputRef.current.value);
    } else {
      current.delete("name");
    }
    const query = current.toString() ? "?" + current.toString() : "";

    router.push(pathname + query);
  };

  return (
    <Box className="bg-light" p="2rem 2rem">
      {/* Search Box */}

      <Box
        sx={{
          bgcolor: "#fff",
          display: "flex",
          width: "min(20rem, 100%)",
          marginInline: "auto",
          borderRadius: ".3rem",
          overflow: "hidden",
        }}
      >
        <InputBase
          inputRef={inputRef}
          placeholder="Search..."
          sx={{ flexGrow: 1, paddingBlock: ".3rem", pl: ".4rem" }}
          onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
        />
        {/* Search Button */}
        <Button variant="contained" disableElevation sx={{ borderRadius: 0 }} onClick={() => handleSubmit()}>
          <Search />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchSection;
