"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
// import { github } from "../utils/Icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="text-left">
      <span className="bg-gradient-to-r from-red-500 via-yellow-300 to-green-500 inline-block text-transparent bg-clip-text text-4xl">Weatherbook</span>
      </div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />

          {/* <Button
            className="source-code-btn flex items-center gap-2"
            onClick={() => {
              router.push("https//github.com");
            }}
          >
            {github} Source Code
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
