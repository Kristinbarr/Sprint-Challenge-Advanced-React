import React from "react";
import Header from "./Header";
import { render, fireEvent } from "@testing-library/react";
​
test("if toggle darkmode changes body's class to dark-mode", async () => {
  const container = render(<Header />);
  const button = container.getByText(/Toggle Dark Mode/i);
  fireEvent.click(button);
  expect(document.body.className).toBe("dark-mode");
});
