import React from "react";
import { render } from "@testing-library/react";
import { Header } from './index'

test("Header test", () => {
  const component = render(<Header />);
});
