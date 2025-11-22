import { describe } from 'vitest'
import { expect, test } from 'vitest'
import { sum } from '../src/sum'

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
  })
})
