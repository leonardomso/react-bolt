const sum = (a, b) => a + b;

describe('Testing the tests setup', () => {
    it('Sum 1 + 1 equals 2', () => {
        expect(sum(1, 1)).toBe(2);
    });
});
