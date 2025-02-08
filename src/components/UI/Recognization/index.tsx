import { Box, Divider, Flex } from "@chakra-ui/react";
import RecognizationCard from "./RecognizationCard";
import { recognizationData } from "./Recognization";

const Recognization = () => {
  return (
    <Box w="88%" mx="auto" py="padding.30">
      <Box maxW="1300px" mx="auto" w="88%">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ md: "padding.10", base: "padding.40" }}
          alignItems={{ base: "center", md: "unset" }}
          maxW="full"
        >
          {recognizationData.map((item, index) => (
            <>
              <RecognizationCard
                key={item.id}
                link={item.link}
                imgSrc={item.imgSrc}
                description={item.description}
              />

              {index < recognizationData.length - 1 && (
                <>
                  <Divider
                    orientation="vertical"
                    h="auto"
                    display={{ md: "block", base: "none" }}
                    borderWidth="1px"
                    borderColor="hsla(0, 0%, 100%, .2)"
                  />
                  <Divider
                    orientation="horizontal"
                    w="107px"
                    display={{ base: "block", md: "none" }}
                    border="1px"
                    borderColor="hsla(0, 0%, 100%, .2)"
                  />
                </>
              )}
            </>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Recognization;
