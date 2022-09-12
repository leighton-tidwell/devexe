import { Button as ThemeUIButton, Text } from "theme-ui";
import { ButtonProps } from "./buttonTypes";
import { Spinner } from "@/components/index";

export const Button = ({
  children = "",
  disabled = false,
  onClick = () => {},
  loading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <ThemeUIButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        color: "text.primary",
        borderRadius: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: ".5em .8em",
      }}
      variant={variant}
      {...props}
    >
      {/* TODO: icons */}
      {loading && <Spinner color="text" />}
      <Text>{children}</Text>
    </ThemeUIButton>
  );
};
