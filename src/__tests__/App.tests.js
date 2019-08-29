import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

test("<App /> should render with given props", () => {
  const { getByTestId } = render(<App title="Test title" />);
  expect(getByTestId("app-title")).toHaveTextContent("Test title");
});
