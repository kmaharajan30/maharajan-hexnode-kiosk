import { Flex } from "@chakra-ui/react";
import Button from "../button";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import AccordionContent from "./AccordionContent";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  isActive: boolean;
  showChevron: boolean;
  children: ReactNode;
  handleToggle: () => void;
  buttonVariant?: string;
}
const Accordion = ({
  isOpen,
  title,
  children,
  handleToggle,
  showChevron,
  buttonVariant = "accordionMain",
}: AccordionProps) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" alignSelf="stretch">
      <Button
        text={title}
        variant={buttonVariant}
        icon={
          showChevron ? (
            isOpen ? (
              <ChevronUpIcon boxSize="24px" />
            ) : (
              <ChevronDownIcon boxSize="24px" />
            )
          ) : undefined
        }
        onClick={handleToggle}
      />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </Flex>
  );
};

export default Accordion;
