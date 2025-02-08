import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AccordionContentProps {
  isOpen: boolean;
  children: ReactNode;
}
const AccordionContent = ({ isOpen, children }: AccordionContentProps) => {
  return <Box display={isOpen ? "block" : "none"}>{children}</Box>;
};

export default AccordionContent;
