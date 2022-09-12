import { Button as ThemeUIButton } from "theme-ui";
import { ButtonProps } from "./buttonTypes";

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
      }}
      variant={variant}
      {...props}
    >
      {/* TODO: loading, icons */}
      {children}
    </ThemeUIButton>
  );
};
