import { render, screen } from "../test-utils";
import { Button } from "@/components/index";

describe("Button", () => {
  it("should render a button with primary styles applied", () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
