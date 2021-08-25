import { render, screen } from "@testing-library/react"

import App from "./App"

test("renders with logger link", () => {
  render(<App />)
  const linkElement = screen.getByText(/With logger/i)
  expect(linkElement).toBeInTheDocument()
})

test("test 1 = 1", () => {
  expect(1).toBe(1)
})
