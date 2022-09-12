import { render, screen } from "../test-utils";
import { Spinner } from "@/components/index";

describe("Spinner", () => {
  it("should render a small spinner with primary styles applied", () => {
    const { container } = render(<Spinner />);

    expect(container.firstChild).toHaveStyle({
      width: "18px",
      height: "18px",
      background: `conic-gradient(#0000 10%, #51E4AB)`,
    });
  });

  it("should render a medium spinner with primary styles applied", () => {
    const { container } = render(<Spinner size="medium" />);

    expect(container.firstChild).toHaveStyle({
      width: "24px",
      height: "24px",
      background: `conic-gradient(#0000 10%, #51E4AB)`,
    });
  });

  it("should render a large spinner with primary styles applied", () => {
    const { container } = render(<Spinner size="large" />);

    expect(container.firstChild).toHaveStyle({
      width: "36px",
      height: "36px",
      background: `conic-gradient(#0000 10%, #51E4AB)`,
    });
  });

  it("should render a small spinner with secondary styles applied", () => {
    const { container } = render(<Spinner color="secondary" />);

    expect(container.firstChild).toHaveStyle({
      width: "18px",
      height: "18px",
      background: `conic-gradient(#0000 10%, #51E4AB)`,
    });
  });

  it("should render a small spinner with text styles applied", () => {
    const { container } = render(<Spinner color="text" />);

    expect(container.firstChild).toHaveStyle({
      width: "18px",
      height: "18px",
      background: `conic-gradient(#0000 10%, #FFFFFF)`,
    });
  });
});
