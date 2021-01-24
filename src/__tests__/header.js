import { render, screen } from '@testing-library/react'
import Header from '../components/header'

test('renders header component', () => {
  render(<Header />)
  expect(screen.getByRole('header')).toBeInTheDocument()
})

test('renders text inside header', () => {
  render(<Header />)
  const headerElementText = document.querySelector('h1')
  expect(headerElementText).toBeInTheDocument()
})
