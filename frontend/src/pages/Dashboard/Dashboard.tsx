import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import DashBoardLayout from "../../components/DashBoardLayout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <DashBoardLayout>
      <Flex wrap={"wrap"} justify={"space-evenly"}>
        {Array.from({ length: 16 }).map((_, i) => (
          <Box
            as="div"
            border={"2px"}
            borderColor={"black"}
            margin={"2%"}
            key={i}
          >
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={handleClick}>View here</Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Flex>
    </DashBoardLayout>
  );
};

export default Dashboard;
