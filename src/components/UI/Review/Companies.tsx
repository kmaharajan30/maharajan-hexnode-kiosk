import { Box, Flex, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { companyLogos } from "./review";

const Companies = () => {
  const scrollAnimation = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); } 
  `;
  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      w="88%"
      mx="auto"
    >
      <Flex
        as="div"
        alignItems="center"
        gap="padding.20"
        mx="auto"
        alignSelf="stretch"
        animation={`${scrollAnimation} 20s linear infinite`}
        minW="max-content"
      >
        {[...companyLogos, ...companyLogos].map((imgSrc, index) => (
          <Image key={index} src={imgSrc} w="100px" h="auto" />
        ))}
      </Flex>
    </Box>
  );
};

export default Companies;
