import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      mx="auto"
      maxW="1330px"
      w="88%"
      flexDirection={{ base: "column", "md-sm": "row" }}
      justifyContent="space-between"
      alignItems="center"
      p={{ base: "padding.20", sm: "padding.30" }}
      gap="padding.20"
    >
      <Text fontSize="fs-12" color="content.darkPrimary" fontWeight="fw-500">
        Terms of Use - Privacy - Cookies
      </Text>
      <Text fontSize="fs-12" color="content.darkPrimary" fontWeight="fw-500">
        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
