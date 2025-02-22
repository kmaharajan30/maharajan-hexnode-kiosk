import { defineStyleConfig } from "@chakra-ui/react";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: "rounded-3",
    fontWeight: "fw-400",
    cursor: "pointer",
    textAlign: "center",
  },

  variants: {
    primary: {
      color: "white",
      bg: "background.background-primary",
      fontSize: "fs-15",
      fontWeight: "fw-500",
      textTransform: "uppercase",
      lineHeight: "lh-24",
      px: "padding.26",
      py: "padding.10",
    },
    heightPrimary: {
      color: "white",
      bg: "background.background-primary",
      fontSize: "fs-15",
      fontWeight: "fw-500",
      textTransform: "uppercase",
      lineHeight: "lh-24",
      px: "padding.26",
      py: "padding.10",
      h: "52px",
      w: { sm: "320px" },
    },
    fullPrimary: {
      color: "white",
      bg: "background.background-primary",
      fontSize: "fs-15",
      fontWeight: "fw-500",
      textTransform: "uppercase",
      lineHeight: "lh-24",
      px: "padding.26",
      py: "padding.10",
      h: "52px",
      w: { sm: "full", base: "320px" },
    },
    secondary: {
      color: "white",
      bg: "background.background-secondary",
      fontSize: "fs-22",
      fontWeight: "fw-600",
      lineHeight: "lh-24",
      px: "padding.30",
      h: "80px",
      py: "padding.10",
      borderRadius: "4px 4px 0 0",
      minW: "240px",
    },
    tertiary: {
      color: "content.primary",
      bg: "#f7f7f7",
      fontSize: "fs-22",
      fontWeight: "fw-600",
      lineHeight: "lh-24",
      px: "padding.30",
      h: "80px",
      py: "padding.10",
      border: "1px",
      borderColor: "border.primary",
      borderRadius: "4px 4px 0 0",
      minW: "240px",
    },
    accordionSecondary: {
      color: "white",
      bg: "background.background-secondary",
      fontSize: "fs-18",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "fw-700",
      lineHeight: "lh-26",
      p: "padding.16",
      h: "80px",
      borderRadius: "rounded-4",
      w: "full",
    },
    accordionTertiary: {
      color: "content.primary",
      bg: "#f7f7f7",
      fontSize: "fs-18",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "fw-700",
      lineHeight: "lh-26",
      p: "padding.16",
      h: "80px",
      borderRadius: "rounded-4",
      w: "full",
      borderBottom: "1px",
      borderColor: "border.primary",
    },
    // navigation: {
    //   color: "content.primary",
    //   bg: "background.dark-primary",
    //   display: "flex",
    //   p: "padding.16",
    //   h: "56px",
    //   borderRadius: "rounded-12",
    //   w: "56px",
    // },
    navigation: {
      color: "content.primary",
      bg: "background.dark-primary",
      display: "flex",
      p: "padding.16",
      h: "56px",
      borderRadius: "rounded-12",
      w: "56px",
      _disabled: {
        bg: "background.dark-primary",
        color: "content.primary",
        cursor: "not-allowed",
        opacity: 1,
      },
      _hover: "none",
    },
    accordionMain: {
      color: "content.secondary",
      bg: "white",
      fontSize: "fs-26",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "fw-700",
      lineHeight: "lh-26",
      pb: "padding.25",
      h: "80px",
      borderRadius: "rounded-4",
      w: "full",
      borderBottom: "1px",
      borderColor: "border.primary",
    },
  },

  defaultProps: {},
});

export default buttonTheme;
