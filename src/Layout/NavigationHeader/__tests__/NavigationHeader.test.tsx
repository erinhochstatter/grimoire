import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { NavigationHeader } from '../NavigationHeader'

describe('NavigationHeader', () => {
  describe('filtering buttons', () => {
    const filters = ['ALL', 'PODCASTS', 'BOOKS', 'ARTICLES']

    it('displays a button for each filter', () => {
      const result = render(
      <></><NavigationHeader />)
      filters.forEach((filter: string) => {
        expect(result.getByRole('link', { name: filter })).toBeInTheDocument()
      })
    })
  })

  it.skip('displays a create new form modal when the plus button is pressed')
  it.skip('displays a search input when the magnifying glass button is pressed')
})
