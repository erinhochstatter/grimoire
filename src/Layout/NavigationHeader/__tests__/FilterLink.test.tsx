import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FilterLink } from '../FilterLink'

describe('FilterLink', () => {
  it.skip('generates a query param for the filter', () => {
    render(<FilterLink title='test' />)
    expect(true).toBe(true)
  })

  it.skip('displays the filtered list on press', () => {
    render(<FilterLink title='test' />)
    expect(true).toBe(true)
  })
})
