import { Box, Flex, Text } from "@chakra-ui/react";
import ProfileCard from "../common/ProfileCard";
import { review } from "./review";
import Button from "../common/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Companies from "./Companies";

const MotionBox = motion(Box);
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  const handleNext = () => {
    if (currentIndex === review.length - 1) {
      setIsReversing(true);
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsReversing(false);
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isReversing) {
        handlePrev();
      } else {
        handleNext();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, isReversing]);

  return (
    <Box bg="background.light-primary" py="padding.60">
      <Flex
        flexDirection="column"
        alignSelf="stretch"
        w="88%"
        mx="auto"
        maxW="1300px"
        gap="padding.60"
      >
        <Text
          as="h2"
          fontSize="fs-40"
          textAlign="center"
          color="color.secondary"
          fontWeight="fw-700"
        >
          Why should you choose Hexnode?
        </Text>

        <MotionBox
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ProfileCard
            name={review[currentIndex].name}
            avatar={review[currentIndex].imgSrc}
            role={review[currentIndex].role}
            comment={review[currentIndex].comment}
            company={review[currentIndex].company}
          />
        </MotionBox>
      </Flex>
      <Flex
        mt="margin.20"
        alignSelf="stretch"
        alignItems="center"
        justifyContent="center"
        gap="padding.12"
      >
        <Button
          onClick={handlePrev}
          icon={
            <ChevronLeftIcon
              boxSize="30px"
              opacity={currentIndex === 0 ? "0.25" : "1"}
            />
          }
          variant="navigation"
          disabled={currentIndex === 0}
        />
        <Button
          onClick={handleNext}
          icon={
            <ChevronRightIcon
              boxSize="30px"
              opacity={currentIndex === 2 ? "0.25" : "1"}
            />
          }
          variant="navigation"
          disabled={currentIndex === 2}
        />
      </Flex>
      <Box mt="margin.40">
        <Companies />
      </Box>
    </Box>
  );
};

export default Review;
