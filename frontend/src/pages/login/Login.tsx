import {
  Box,
  Button,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import DashBoardLayout from "../../components/DashBoardLayout";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleClick = () => setShowPassword((ele) => !ele);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(`good boy`);
    console.log(data);
    setUserName("");
    setUserPassword("");
  };

  //   console.log(watch("email"));

  const signUpSubmit = () => {
    navigate("/signup");
  };

  return (
    <DashBoardLayout>
      <Stack
        as="div"
        width={"40%"}
        height={"80%"}
        border={"2px"}
        borderColor={"cyan"}
        borderRadius={"20px"}
        padding={"5%"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Email address</FormLabel>
            <Input
              id="email"
              type="email"
              size={"lg"}
              borderColor={"black"}
              {...register("email")}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel> Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                size={"lg"}
                borderColor={"black"}
                {...register("password")}
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
              <InputRightElement width="4.5rem">
                <Icon
                  h="1.75rem"
                  onClick={handleClick}
                  as={showPassword ? FaEye : FaEyeSlash}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box
            as="div"
            width={"full"}
            display={"flex"}
            justifyContent={"center"}
            marginTop={"5%"}
          >
            {errors.password && <span>This field is required</span>}
            <Input
              type="submit"
              width={"110px"}
              height={"50px"}
              backgroundColor={"#92b39b"}
              value={"Login"}
              _hover={{
                cursor: "pointer",
                border: "2px",
                borderColor: "black",
                color: "white",
              }}
              fontWeight={"bold"}
            />
          </Box>
        </form>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Button
            type="submit"
            colorScheme="cyan"
            size={"lg"}
            width={"50"}
            margin={"10px"}
            onClick={signUpSubmit}
          >
            SignUp
          </Button>
        </HStack>
      </Stack>
    </DashBoardLayout>
  );
};

export default Login;
