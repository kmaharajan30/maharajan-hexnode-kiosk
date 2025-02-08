import { Box } from "@chakra-ui/react";
import MainLayout from "../MainLayout";

const Signup = () => {
  const handleFormSubmit = (email: string) => {
    console.log(email);
  };
  return (
    <Box mx="auto" w="88%">
      <MainLayout
        title="Sign up and try Hexnode free for 14 days!"
        submitText="get started"
        link="https://www.hexnode.com/mobile-device-management/request-demo/"
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default Signup;
