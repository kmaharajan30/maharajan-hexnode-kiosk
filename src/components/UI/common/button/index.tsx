import { Button as ChakraButton, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: string;
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  width?: string;
  icon?: ReactNode;
}

const Button = ({
  variant = "",
  text = "",
  onClick = () => {},
  type = "button",
  disabled = false,
  width = "",
  icon,
}: ButtonProps) => {
  const styles = useStyleConfig("Button", { variant, width });

  return (
    <ChakraButton
      sx={styles}
      onClick={onClick}
      type={type}
      isDisabled={disabled}
      w={width}
    >
      {text && text}
      {icon && icon}
    </ChakraButton>
  );
};

export default Button;
