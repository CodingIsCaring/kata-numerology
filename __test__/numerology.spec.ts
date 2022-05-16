import { Numerology } from '../src/numerology';

describe('Numerology', () => {
  it('calculates your number from birthdate', () => {
    expect(Numerology.calculateNumberFrom(new Date(1985, 11, 22))).toBe(3);
    expect(Numerology.calculateNumberFrom(new Date(1987, 2, 5))).toBe(6);
    expect(Numerology.calculateNumberFrom(new Date(1964, 9, 13))).toBe(7);
    expect(Numerology.calculateNumberFrom(new Date(2008, 0, 2))).toBe(4);
    expect(Numerology.calculateNumberFrom(new Date(2010, 5, 14))).toBe(5);
    expect(Numerology.calculateNumberFrom(new Date(2010, 1, 4))).toBe(9);
  });
});
