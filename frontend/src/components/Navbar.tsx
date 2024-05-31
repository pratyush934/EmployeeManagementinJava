import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const arr = ["Home", "Hotels", "About Us", "Login"];
  return (
    <HStack
      height={"90px"}
      width={"full"}
      backgroundColor={"lightblue"}
      alignItems={"center"}
    >
      <Box marginLeft={"3%"} justifyContent={"center"} alignItems={"center"}>
        <Icon as={GiHamburgerMenu} fontSize={"250%"} />
      </Box>
      <Heading marginLeft={"3%"} fontFamily={"fantasy"} marginBottom={"0.3%"}>
        Employee Votica
      </Heading>
      <Spacer />
      <HStack
        marginRight={"5%"}
        width={"25%"}
        // backgroundColor={"white"}
        height={"80%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        {arr.map((ele) => (
          <Stack
            width={"20%"}
            height={"80%"}
            // backgroundColor={"aqua"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"2%"}
          >
            <Button colorScheme='blue'size={"lg"} >{ele}</Button>
          </Stack>
        ))}
      </HStack>
    </HStack>
  );
};

export default NavBar;
