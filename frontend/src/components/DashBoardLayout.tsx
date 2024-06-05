import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import NavBar from "./Navbar";
import SideNavLayout from "./SideNavLayout";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar onOpen={onOpen}>
        <SideNavLayout isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </NavBar>
      <Box
        width={"full"}
        height={"full"}
        display={"flex"}
        margin={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {children}
      </Box>
    </>
  );
};

export default DashBoardLayout;
