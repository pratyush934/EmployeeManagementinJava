import "./App.css";
import DashBoardLayout from "./components/DashBoardLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <DashBoardLayout>
        <Dashboard />
      </DashBoardLayout>
    </>
  );
}

export default App;
