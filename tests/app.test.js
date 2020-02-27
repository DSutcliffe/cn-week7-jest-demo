const app = require('../app.js')

test('should equal 5 when pased 2 and 3', () => {
    expect(app.add(2,3)).toBe(5);
})