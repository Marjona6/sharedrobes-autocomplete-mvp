import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const headerElement = screen.getByRole('header')
  expect(headerElement).toBeInTheDocument()
})

test('renders autocomplete input field', () => {
  render(<App />)
  const autocompleteInputElement = screen.getByLabelText('item-description')
  expect(autocompleteInputElement).toBeInTheDocument()
})
