export class Numerology {
  static calculateNumberFrom(birthdate: Date): number {
    const [year, month, day] = [
      birthdate.getFullYear().toString(),
      (birthdate.getMonth() + 1).toString(),
      birthdate.getDate().toString(),
    ];
    const date = month + day + year;
    let yourNumber = 0;
    date.split('').forEach(elem => {
      yourNumber += Number.parseInt(elem);
      if (yourNumber >= 10) {
        yourNumber =
          Number.parseInt(yourNumber.toString()[0]) +
          Number.parseInt(yourNumber.toString()[1]);
      }
    });
    return yourNumber;
  }
}
