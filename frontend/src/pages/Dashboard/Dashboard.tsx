import { Box } from "@chakra-ui/react";
import DashBoardLayout from "../../components/DashBoardLayout";

const Dashboard = () => {
  return (
    <DashBoardLayout>
      <Box as={"div"} margin={"25px"} backgroundColor={"red"}>
        <h1>Hello World I am Pratyush</h1>
      </Box>
    </DashBoardLayout>
  );
};

export default Dashboard;
