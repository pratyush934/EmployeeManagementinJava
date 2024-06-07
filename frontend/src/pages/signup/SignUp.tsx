import {
    Box,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Textarea
} from "@chakra-ui/react";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../../components/DashBoardLayout";

type Inputs = {
  firstName: string;
  lastName: string;
  userEmail: string;
  userPassword: string;
  rewritePassword: string;
  description: string;
};

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userEmail, setuserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [rewritePassword, setRewritePassword] = useState<string>("");
  const [description, setDesription] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState<boolean>(false);


  const handleClick = () => setShowPassword((ele) => !ele);
  const handleClickTwo = () => setShowPasswordTwo((ele) => !ele);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(`object`);
    navigate("/");
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
            <FormLabel>First Name</FormLabel>
            <Input
              id="firstname"
              type="text"
              size={"lg"}
              borderColor={"black"}
              {...register("firstName")}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Last name</FormLabel>
            <Input
              id="lastname"
              type="text"
              size={"lg"}
              borderColor={"black"}
              {...register("lastName")}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              type="email"
              size={"lg"}
              borderColor={"black"}
              {...register("userEmail")}
              onChange={(e) => setuserEmail(e.target.value)}
              value={userEmail}
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
                  as={showPassword ? FaEye : FaEyeSlash}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Rewrite Your Password</FormLabel>
            <InputGroup>
              <Input
                id="rewritepassword"
                type={showPasswordTwo ? "text" : "password"}
                size={"lg"}
                borderColor={"black"}
                {...register("rewritePassword")}
                onChange={(e) => setRewritePassword(e.target.value)}
                value={rewritePassword}
              />
              <InputRightElement width="4.5rem">
                <Icon
                  h="1.75rem"
                  onClick={handleClickTwo}
                  as={showPasswordTwo ? FaEye : FaEyeSlash}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box as="div" marginBottom={"10px"}>
            <FormLabel>Description</FormLabel>
            <Textarea
              id="text"
              size={"lg"}
              variant={"outline"}
              colorScheme="cyan"
              borderColor={"black"}
              {...register("description")}
              onChange={(e) => setDesription(e.target.value)}
              value={description}
            />
          </Box>
          <Box
            as="div"
            width={"full"}
            display={"flex"}
            justifyContent={"center"}
            marginTop={"5%"}
          >
            {errors.userPassword && <span>This field is required</span>}
            <Input
              type="submit"
              width={"40%"}
              backgroundColor={"lightgreen"}
              value="Sign up"
            />
          </Box>
        </form>
      </Stack>
    </DashBoardLayout>
  );
};

export default SignUp;
