const parseToArray = (birthdate: Date): string[] => {
  const [year, month, day] = [
    birthdate.getFullYear().toString(),
    (birthdate.getMonth() + 1).toString(),
    birthdate.getDate().toString(),
  ];
  return (month + day + year).split('');
};

const hasMoreThanOneDigit = (yourNumber: number): boolean => yourNumber >= 10;

export class Numerology {
  static calculateNumberFrom(birthdate: Date): number {
    const dateInDigits = parseToArray(birthdate);
    let yourNumber = 0;
    dateInDigits.forEach(digit => {
      yourNumber += Number(digit);
      if (hasMoreThanOneDigit(yourNumber)) {
        yourNumber = this.addDigitsIn(yourNumber);
      }
    });
    return yourNumber;
  }

  private static addDigitsIn(yourNumber: number): number {
    return Number(yourNumber.toString()[0]) + Number(yourNumber.toString()[1]);
  }
}
