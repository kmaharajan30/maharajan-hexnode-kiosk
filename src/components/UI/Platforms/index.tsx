import { Flex, Image, Text } from "@chakra-ui/react";
import { platformLogos } from "../Possibilities/platforms";

const Platforms = () => {
  return (
    <Flex
      flexDirection="column"
      mx="auto"
      maxW="1330px"
      w="88%"
      bg="background.dark-primary"
      py={{ xlg: "padding.120", base: "padding.60" }}
      alignItems="center"
      gap={{ md: "padding.60", base: "padding.40" }}
    >
      <Text
        fontSize="fs-40"
        fontWeight="fw-700"
        color="content.background-secondary"
      >
        Platforms Supported
      </Text>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        gap="padding.24"
        alignSelf="stretch"
      >
        {platformLogos.map((logo) => (
          <Image
            src={logo}
            h="60px"
            maxW="150px"
            flexBasis={{ base: "50%", md: "33.33%", xlg: "calc(100% / 6)" }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Platforms;
