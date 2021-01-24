import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const headerElement = screen.getByRole('header')
  expect(headerElement).toBeInTheDocument()
})

test('renders text inside header', () => {
  render(<App />)
  const headerElementText = document.querySelector('h1')
  expect(headerElementText).toBeInTheDocument()
})

// test("renders autocomplete input field", () => {
//   render(<App />);
//   const autocompleteInputElement = screen.findByRole("header"); //
//   expect(autocompleteInputElement).toBeInTheDocument();
// });
