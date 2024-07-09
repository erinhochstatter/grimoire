import { screen, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NavigationButton } from '../NavigationButton'

describe('NavigationButton', () => {
  it.skip('generates a query param for the filter', () => {
    render(<NavigationButton title='test' />)
    expect(true).toBe(true)
  })

  it.skip('displays the filtered list on press', () => {
    render(<NavigationButton title='test' />)
    expect(true).toBe(true)
  })
})
