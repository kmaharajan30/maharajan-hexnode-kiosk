import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import Button from "../button";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  return (
    <Box zIndex="1002">
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent
          maxW={{ "md-sm": "50vw", base: "100vw" }}
          bg="background.dark-primary"
        >
          <DrawerHeader
            display="flex"
            px="padding.30"
            py="padding.32"
            alignSelf="stretch"
            justifyContent="flex-end"
            borderBottom="1px"
            borderBottomColor="border.tertiary"
          >
            <CloseIcon onClick={onClose} cursor="pointer" />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            alignItems="center"
            flexDirection="column"
            alignSelf="stretch"
            py="padding.30"
            px="padding.32"
            gap="padding.20"
          >
            <Button
              variant="fullPrimary"
              text="14 day free trial"
              onClick={() =>
                (window.location.href =
                  "https://www.hexnode.com/mobile-device-management/cloud/signup/")
              }
            />
            <Text
              fontSize="fs-16"
              fontWeight="fw-500"
              color="content.secondary"
              cursor="pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.hexnode.com/mobile-device-management/sign-in/")
              }
            >
              Login
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
