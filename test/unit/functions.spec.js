import { addWrapper, capitalizePrint } from '../../src/js/functions'

describe('addWrapper()', () => {
  it('add a div wrapper to a raw html', () => {
    expect(addWrapper('<span>Test</span>')).toBe('<div style="width:100%;"><span>Test</span></div>')
  })
})

describe('capitalizePrint()', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizePrint('test')).toBe('Test')
  })
})
