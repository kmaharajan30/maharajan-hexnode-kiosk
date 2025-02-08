import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface UsesContentProps {
  details?: string;
  imgSrc: string;
  link?: string;
  label?: string;
  title?: string;
  subContent?: {
    id: number;
    description: string;
  }[];
}
const UsesContent = ({
  title,
  imgSrc,
  subContent,
  details,
  link,
}: UsesContentProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 300);

    return () => clearTimeout(timeout);
  }, [imgSrc]);
  return (
    <Flex
      p="padding.40"
      bg="background.background-tertiary"
      flexDirection={{ xlg: "row", base: "column-reverse" }}
      justifyContent="space-between"
      gap="padding.20"
      alignItems={details ? "center" : "unset"}
    >
      <Flex
        flexDirection="column"
        gap={{ xlg: "padding.40", "md-sm": "padding.20" }}
        transform={isAnimating ? "translateX(-10px)" : "translateX(0)"}
        transition={isAnimating ? "transform 0.3s ease-out" : "none"}
      >
        {title && (
          <Text fontSize="fs-28" color="content.secondary" fontWeight="fw-700">
            {title}
          </Text>
        )}
        {details && (
          <Text
            fontSize="fs-18"
            fontWeight="fw-400"
            color="content.light-primary"
          >
            {details}
          </Text>
        )}
        {link && (
          <Flex
            alignItems="center"
            alignSelf="stretch"
            color="content.danger"
            cursor="pointer"
          >
            <Text
              fontSize="fs-18"
              fontWeight="fw-400"
              textTransform="uppercase"
              display="flex"
              alignItems="center"
            >
              Try for free
            </Text>
            <ChevronRightIcon boxSize="18px" />
          </Flex>
        )}
        <Flex gap="padding.10" flexDirection="column">
          {subContent?.map((content) => (
            <Flex gap="padding.12" alignItems="center">
              <CheckIcon color="#60c458" />
              <Text
                fontSize="fs-18"
                fontWeight="fw-400"
                color="content.light-primary"
              >
                {content.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Image
        src={imgSrc}
        maxW={{ base: "308px", "md-sm": "460px" }}
        maxH={{ "md-sm": "352px", base: "210px" }}
        borderRadius="rounded-10"
        opacity={isAnimating ? 0 : 1}
        transform={isAnimating ? "translate(70px)" : "translate(0)"}
        transition={isAnimating ? "transform 1s ease-out" : "none"}
      />
    </Flex>
  );
};

export default UsesContent;
