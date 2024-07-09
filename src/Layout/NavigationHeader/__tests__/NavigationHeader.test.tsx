import { screen, render, getByRole } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NavigationHeader } from '../NavigationHeader'

describe('NavigationHeader', () => {
  describe('filtering buttons', () => {
    const filters = ['ALL', 'PODCASTS', 'BOOKS', 'ARTICLES']

    it('displays a button for each filter', () => {
      let filterButton

      render(<NavigationHeader />)
      filters.forEach((filter: string) => {
        filterButton = screen.getByRole('button', { name: filter })
      })
    })
  })

  it.skip('displays a create new form modal when the plus button is pressed')
  it.skip('displays a search input when the magnifying glass button is pressed')
})
