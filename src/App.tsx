import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/UI/Header";
import Recognization from "./components/UI/Recognization";
import UseCases from "./components/UI/UseCases";
import Possibilites from "./components/UI/Possibilities";
import Review from "./components/UI/Review";
import Platforms from "./components/UI/Platforms";
import Signup from "./components/UI/Signup";
import Register from "./components/UI/Register";
import Footer from "./components/UI/Footer";
import AIButton from "./components/UI/AI/AIButton";

function App() {
  return (
    <Box>
      <Box w="full">
        <Header />
      </Box>
      <Box w="full" mx="auto" bg="rgb(2 10 25 /1)">
        <Register />
      </Box>
      <Box w="full" bg="rgb(26 28 43/1) ">
        <Recognization />
      </Box>
      <Box w="full">
        <UseCases />
      </Box>
      <Box w="full">
        <Possibilites />
      </Box>
      <Box w="full">
        <Review />
      </Box>
      <Box w="full">
        <Platforms />
      </Box>
      <Box w="full" bg="rgb(2 10 25 /1)">
        <Signup />
      </Box>
      <Box w="full" bg="background.tertiary">
        <Footer />
      </Box>
      <AIButton />
    </Box>
  );
}

export default App;
