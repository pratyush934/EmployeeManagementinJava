import { useForm } from "react-hook-form";
import DashBoardLayout from "../../components/DashBoardLayout";
import {
  Box,
  Button,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

type Inputs = {
  userName: string;
  userEmail: string;
  userPassword: string;
  address: string;
  description: string;
  phone: string;
};

const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick = () => setShowPassword((ele) => !ele);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = () => {
    console.log(`object`);
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
              {...register("userName")}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Email Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                size={"lg"}
                borderColor={"black"}
                {...register("userPassword")}
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
              <InputRightElement width="4.5rem">
                <Icon
                  h="1.75rem"
                  onClick={handleClick}
                //   as={showPassword ? FaEye : FaEyeSlash}
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
            {errors.userPassword && <span>This field is required</span>}
            <Input type="submit" width={"40%"} backgroundColor={"lightgreen"} />
          </Box>
        </form>
        <Button
          colorScheme="blue"
          size={"lg"}
          width={"30"}
          margin={"10px"}
          //   onClick={signUpSubmit}
        >
          SignUp
        </Button>
      </Stack>
    </DashBoardLayout>
  );
};

export default SignUp;
