import { Flex, Image, Link, Text } from "@chakra-ui/react";

interface RecognizationCardProps {
  imgSrc: string;
  description: string;
  link: string;
}
const RecognizationCard = ({
  imgSrc,
  description,
  link,
}: RecognizationCardProps) => {
  return (
    <Link href={link} px="padding.10">
      <Flex
        flexDirection="column"
        gap="padding.15"
        alignItems={{ base: "center", md: "baseline" }}
        _hover={{
          transform: "translateY(-5px)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <Image src={imgSrc} bg="transparent" objectFit="cover" h="25px" />
        <Text
          textAlign={{ md: "left", base: "center" }}
          fontSize="fs-14"
          lineHeight="lh-22"
          color="hsla(0, 0%, 100%, .6)"
        >
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default RecognizationCard;
