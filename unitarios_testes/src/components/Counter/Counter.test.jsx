// src/components/Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter with initial count of 0", () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test("increments count when button is clicked", () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Increment/i);
  fireEvent.click(buttonElement);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});
