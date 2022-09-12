import { Box as ThemeUIBox } from "theme-ui";
import { LogoProps } from "./logoTypes";

export const Logo = ({ sx, variant = "default" }: LogoProps) => {
  const src =
    variant === "default"
      ? "/images/logo-full.svg"
      : variant === "icon"
      ? "/images/logo-icon.svg"
      : "images/logo-no-icon.svg";
  const alt =
    variant === "default"
      ? "Full Devexe logo"
      : variant === "icon"
      ? "Devexe icon"
      : "Devexe logo text";
  return (
    <ThemeUIBox
      sx={{
        img: { ...sx },
      }}
    >
      <img src={src} alt={alt} />
    </ThemeUIBox>
  );
};
