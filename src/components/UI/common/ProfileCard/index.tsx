import { Divider, Flex, Image, Text } from "@chakra-ui/react";

interface ProfileCardProps {
  name: string;
  avatar: string;
  comment: string;
  role?: string;
  company?: string;
}
const ProfileCard = ({
  name,
  avatar,
  comment,
  role = "",
  company = "",
}: ProfileCardProps) => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      borderRadius="rounded-18"
      gap={{ md: "padding.40", base: "padding.0" }}
      minH="310px"
      w={{ md: "unset", base: "400px" }}
      bg="white"
      alignSelf="stretch"
      pb={{ mb: "unset", base: "padding.20" }}
      mx="auto"
    >
      <Image
        src={avatar}
        w={{ base: "280px", sm: "400px", md: "unset", lg: "320px" }}
        h={{ base: "280px", sm: "400px", md: "unset", lg: "320px" }}
        maxH="400px"
        flexBasis={{ base: "auto", md: "47%" }}
        maxW={{ md: "320px" }}
        borderLeftRadius={{ md: "rounded-18", base: "unset" }}
        borderTopRadius={{ md: "unset", base: "rounded-18" }}
        borderTopLeftRadius={{ md: "rounded-18", base: "rounded-18" }}
      />
      <Flex
        flexDirection="column"
        maxWidth={{ "md-sm": "640px" }}
        justifyContent="center"
        alignSelf="stretch"
        padding="20px"
        alignItems={{ md: "flex-start", base: "center" }}
      >
        <Text
          textAlign={{ md: "left", base: "center" }}
          fontSize={{ base: "fs-20", md: "fs-24" }}
          fontWeight="fw-700 "
          mb="20px"
        >
          {comment}
        </Text>
        <Divider
          orientation="horizontal"
          w="80%"
          border="1px"
          borderColor="border.primary"
        />
        <Flex
          mt="margin.10"
          flexDirection="column"
          alignSelf="stretch"
          justifyContent="center"
          alignItems={{ md: "flex-start", base: "center" }}
        >
          <Text
            fontSize="fs-20"
            fontWeight="fw-700"
            color="content.secondary"
            lineHeight="lh-33"
          >
            {name}
          </Text>
          {role && (
            <Text
              fontSize="fs-14"
              fontWeight="fw-400"
              color="content.secondary"
              lineHeight="lh-18"
              opacity="0.7"
            >
              {role}
            </Text>
          )}
          {company && (
            <Text
              fontSize="fs-14"
              fontWeight="fw-400"
              color="content.secondary"
              lineHeight="lh-18"
              opacity="0.7"
            >
              {company}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
