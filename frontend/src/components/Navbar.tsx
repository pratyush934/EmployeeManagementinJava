import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Select,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { FaHotel } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({
  children,
  onOpen,
}: {
  children: React.ReactNode;
  onOpen: () => void;
}) => {
  const elements = [
    {
      name: "Home",
      icon: IoHome,
      link: "/",
    },
    {
      name: "Hotels",
      icon: FaHotel,
      link: "/hotel",
    },
    {
      name: "About",
      icon: FcAbout,
      link: "/about",
    },
    {
      name: "login",
      icon: CiLogin,
      link: "/login",
    },
  ];
  // const arr = ["Home", "Hotels", "About", "Login"];
  const isLargeScreen = useBreakpointValue({ base: false, xl: true });

  const history = useNavigate();

  return (
    <HStack
      height={"90px"}
      width={"full"}
      alignItems={"center"}
      backgroundColor={"lightblue"}
    >
      <Box marginLeft={"3%"} justifyContent={"center"} alignItems={"center"}>
        <Button onClick={onOpen} backgroundColor={"lightblue"}>
          <Icon as={GiHamburgerMenu} fontSize={"250%"} />
        </Button>
      </Box>
      <Box>{children}</Box>
      <Heading marginLeft={"3%"} fontFamily={"fantasy"} marginBottom={"0.3%"}>
        Employee Votica
      </Heading>
      <Spacer />

      {isLargeScreen ? (
        <HStack
          marginRight={"5%"}
          width={"35%"}
          height={"80%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {elements.map((ele, key) => (
            <Stack
              key={key}
              width={"40%"}
              height={"80%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link to={ele.link}>
                <Box
                  width={"120%"}
                  height={"100%"}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  cursor={"pointer"}
                  transition={"all 0.2s ease"}
                  _hover={{
                    border: "2px",
                    borderColor: "#272b2a",
                    backgroundColor: "#272b2a",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  <Icon as={ele.icon} boxSize={"25px"} />
                  <Text fontFamily={"ubuntu"} fontSize={"30px"}>
                    {ele.name}
                  </Text>
                  {/* <Link to={ele.link} /> */}
                </Box>
              </Link>
            </Stack>
          ))}
        </HStack>
      ) : (
        <Select
          placeholder={"Menu"}
          size="lg"
          colorScheme="blackAlpha"
          variant={"flushed"}
          width={"30%"}
          marginRight={"20px"}
          onChange={(e) => history(e.target.value)}
        >
          {elements.map((ele, key) => (
            <option key={key} value={ele.link}>
              {ele.name}
            </option>
          ))}
        </Select>
      )}
    </HStack>
  );
};

export default NavBar;
