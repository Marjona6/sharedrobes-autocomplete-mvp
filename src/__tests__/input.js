import { render, screen } from '@testing-library/react'
import Input from '../components/input'

test('renders input component', () => {
  render(<Input />)
  const autocompleteInputElement = screen.getByLabelText('item-description')
  expect(autocompleteInputElement).toBeInTheDocument()
})

test('displays correct placeholder text', () => {
  render(<Input />)
  const placeholderText = screen.getByPlaceholderText(
    'What would you like to share?'
  )
  expect(placeholderText).toBeInTheDocument()
})
