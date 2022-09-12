import { render, screen } from "../test-utils";
import { Logo } from "@/components/index";

describe("Logo", () => {
  it("should render a logo with default logo", () => {
    render(<Logo />);

    const imgSrc = screen.getByRole("img").src;
    expect(imgSrc).toContain("/images/logo-full.svg");
  });

  it("should render a logo with icon logo", () => {
    render(<Logo variant="icon" />);

    const imgSrc = screen.getByRole("img").src;
    expect(imgSrc).toContain("/images/logo-icon.svg");
  });

  it("should render a logo with text logo", () => {
    render(<Logo variant="no-icon" />);

    const imgSrc = screen.getByRole("img").src;
    expect(imgSrc).toContain("/images/logo-no-icon.svg");
  });

  it("should render a logo with alt text", () => {
    render(<Logo />);

    const imgAlt = screen.getByRole("img").alt;
    expect(imgAlt).toEqual("Full Devexe logo");
  });

  it("should render a logo with icon logo", () => {
    render(<Logo variant="icon" />);

    const imgAlt = screen.getByRole("img").alt;
    expect(imgAlt).toEqual("Devexe icon");
  });

  it("should render a logo with text logo", () => {
    render(<Logo variant="no-icon" />);

    const imgAlt = screen.getByRole("img").alt;
    expect(imgAlt).toEqual("Devexe logo text");
  });

  it("should render a logo with custom styles", () => {
    render(<Logo sx={{ width: "20px" }} />);

    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ width: "20px" });
  });
});
