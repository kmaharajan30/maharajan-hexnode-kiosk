import { ChatIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const AIButton = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      boxSize="48px"
      position="fixed"
      bg="background.lightBlue"
      borderRadius="full"
      bottom="20px"
      right="20px"
      boxShadow="0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16)"
    >
      <ChatIcon
        boxSize="24px"
        fill="white"
        bg="white"
        cursor="pointer"
        color="white"
      />
    </Flex>
  );
};

export default AIButton;
