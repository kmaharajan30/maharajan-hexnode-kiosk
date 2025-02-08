import { Flex, Heading } from "@chakra-ui/react";
import Button from "../../common/button";
import UseCaseContent from "./UsesContent";
import { useState } from "react";
import Accordion from "../../common/Accordion";

interface ButtonContexts {
  id: number;
  text: string;
}

export interface Content {
  id: number;
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
interface UsesProps {
  title: string;
  showTabbing?: boolean;
  buttonContexts: ButtonContexts[];
  content: Content[];
}
const Uses = ({
  title,
  showTabbing = false,
  buttonContexts,
  content,
}: UsesProps) => {
  const [selectedContent, setSelectedContent] = useState(content[0]);

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <Flex
      flexDirection="column"
      py={{ xlg: "padding.120", "md-sm": "padding.60", base: "padding.40" }}
      maxW="1300px"
      w="88%"
      justifyContent="center"
      alignItems="center"
      gap="padding.60"
      mx="auto"
    >
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "fs-28", "md-sm": "fs-32" }}
        role="heading"
        fontWeight="fw-700"
      >
        {title}
      </Heading>
      {showTabbing && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          border="1px"
          borderColor="border.primary"
          borderRadius="rounded-4"
          alignSelf="stretch"
          w="100%"
          display={{ base: "none", "md-sm": "block" }}
        >
          <Flex
            justifyContent="start"
            bg="white"
            alignSelf="stretch"
            overflowX="auto"
            w="100%"
            scrollBehavior="smooth"
            css={{
              scrollbarWidth: "none",
              "-ms-overflow-style": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {buttonContexts.map((item) => (
              <Button
                text={item.text}
                onClick={() =>
                  setSelectedContent(content.find((c) => c.id === item.id)!)
                }
                variant={
                  selectedContent.id === item.id ? "secondary" : "tertiary"
                }
              />
            ))}
          </Flex>
          <UseCaseContent
            title={selectedContent.title}
            imgSrc={selectedContent.imgSrc}
            subContent={selectedContent.subContent}
          />
        </Flex>
      )}

      {/* mobile-content */}

      <Flex
        flexDirection="column"
        borderWidth={showTabbing ? "1px" : "none"}
        borderRadius={showTabbing ? "rounded-4" : "none"}
        borderColor="border.primary"
        alignSelf="stretch"
        display={showTabbing ? { base: "block", "md-sm": "none" } : "block"}
      >
        {buttonContexts.map((item, index) => {
          const matchingContent = content.find((c) => c.id === item.id);

          return (
            <Accordion
              key={item.id}
              isOpen={openAccordion === index}
              isActive={openAccordion === index}
              handleToggle={() => handleAccordionToggle(index)}
              title={item.text}
              buttonVariant={
                openAccordion === index && showTabbing
                  ? "accordionSecondary"
                  : !showTabbing
                  ? "accordionMain"
                  : "accordionTertiary"
              }
              showChevron={showTabbing}
            >
              {matchingContent && (
                <UseCaseContent
                  title={matchingContent.title}
                  details={matchingContent.details}
                  imgSrc={matchingContent.imgSrc}
                  subContent={matchingContent.subContent}
                  link={matchingContent.link}
                />
              )}
            </Accordion>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Uses;
