import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Hexnode from "../../../icons/Hexnode";
import Button from "../common/button";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuDrawer from "../common/Drawer/MenuDrawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Box
        zIndex="1000"
        position="fixed"
        top="0"
        py="padding.8"
        w="full"
        mx="auto"
        bg={scrolled ? "white" : "rgb(2 10 25 /1)"}
        borderBottom="1px border.secondary"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py="padding.8"
          alignSelf="stretch"
          mx="auto"
          w="88%"
          zIndex="1001"
        >
          <Hexnode fillColor={scrolled ? "black" : "white"} />
          <Box display={{ base: "none", xl: "block" }}>
            <Button text="14 day free trial" variant="primary" />
          </Box>
          <Box display={{ xl: "none", base: "block" }}>
            <HamburgerIcon
              boxSize="24px"
              color={scrolled ? "black" : "white"}
              cursor="pointer"
              onClick={onOpen}
            />
          </Box>
        </Flex>
      </Box>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
