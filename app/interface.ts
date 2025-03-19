{
  //
  interface IPerson {
    name: string;
    age: number;
    isStudent: boolean;
    id: string;
    batch: number;
  }

  interface IPerson {
    versity: string;
  }

  const person1: IPerson = {
    name: "Asif",
    age: 23,
    isStudent: true,
    id: "123",
    batch: 2021,
    versity: "KYAU",
  };

  console.log(person1);

  //
}
