import { Box } from "@chakra-ui/react";
import MainLayout from "../MainLayout";

const Register = () => {
  const handleFormSubmit = (email: string) => {
    console.log(email);
  };
  return (
    <Box mx="auto" w="88%">
      <MainLayout
        title="Turn your devices into kiosks in a few minutes with Hexnode UEM"
        backgroundImg="/src/assets/images/layout.webp"
        submitText="get started now!"
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default Register;
