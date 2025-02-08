import { Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import Button from "../common/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

interface MainLayoutProps {
  title: string;
  backgroundImg?: string;
  submitText: string;
  link?: string;
  onSubmit: (email: string) => void;
}
const MainLayout = ({
  title,
  backgroundImg,
  submitText,
  link,
  onSubmit,
}: MainLayoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({ mode: "onSubmit" });
  console.log(errors);

  const onFormSubmit = (data: { email: string }) => {
    onSubmit(data.email);
  };
  return (
    <Flex
      flexDirection={{ xl: "row", base: "column" }}
      justifyContent={backgroundImg ? { xl: "space-between" } : "center"}
      alignItems="center"
      maxW="full"
      py="padding.30"
    >
      <Flex
        flexDirection="column"
        gap={{ base: "padding.20", md: "padding.40" }}
        order={{ base: "2", xl: "1" }}
        maxW={{ "md-sm": "550px", xl: "498px", base: "full" }}
      >
        <Heading
          textAlign={{ xl: "left", base: "center" }}
          fontSize={{ xlg: "fs-42", base: "fs-34" }}
          lineHeight={{ xlg: "lh-53", base: "lh-44" }}
          color="rgb(255 255 255 /1)"
        >
          {title}
        </Heading>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          style={{ padding: 0, margin: 0, width: "100%" }}
        >
          <Flex flexDirection="column" gap="padding.20" alignSelf="stretch">
            <Flex
              justifyContent={{ xl: "start", base: "center" }}
              gap="padding.8"
              flexDirection={{ "md-sm": "row", base: "column" }}
              width="full"
              alignItems="center"
            >
              <Input
                type="text"
                placeholder="Your Work Email"
                fontSize="fs-16"
                px="padding.10"
                maxW={{ "md-sm": "280px", sm: "320px" }}
                h="52px"
                bg="white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
                focusBorderColor="none"
              />
              <Button text={submitText} type="submit" variant="heightPrimary" />
            </Flex>
            {errors.email && (
              <Text
                color="content.darkPrimary"
                fontSize="fs-14"
                fontWeight="fw-400"
                textAlign="center"
                mt="-10px"
                mb="-10px"
              >
                {errors.email.message}
              </Text>
            )}
            {link && (
              <Flex
                gap="padding.8"
                alignSelf="stretch"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color="content.darkPrimary"
                  fontSize="fs-17"
                  fontWeight="fw-500"
                >
                  No credit cards required.{" "}
                  <Text
                    as="span"
                    alignItems="center"
                    gap="padding.8"
                    cursor="pointer"
                    color="content.danger"
                    onClick={() => (window.location.href = link)}
                  >
                    Request a demo <ChevronRightIcon />
                  </Text>
                </Text>
              </Flex>
            )}
          </Flex>
        </form>
      </Flex>
      {backgroundImg && (
        <Image
          src={backgroundImg}
          alt="image"
          w="full"
          maxH="full"
          maxW={{ base: "full", md: "597px" }}
          order={{ xl: "2", base: "1" }}
        />
      )}
    </Flex>
  );
};

export default MainLayout;
