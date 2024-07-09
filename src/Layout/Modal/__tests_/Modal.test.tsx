import { describe, it, expect } from 'vitest'

describe('something truthy and falsy', () => {
  it.skip('appears when isOpen is true', () => {
    expect(true).toBe(true)
  })

  it.skip('closes when the x is clicked', () => {
    expect(false).toBe(false)
  })

  it.skip('cancels when the background is clicked', () => {
    expect(false).toBe(false)
  })

  it.skip('cancels on escape', () => {})
})
