{
  //

  //   Normal Array
  /*
    const numArray: number[] = [1, 2, 3, 4, 5];
    const stringArr: string[] = ["a", "b", "c", "d", "e"];
    const boolArr: boolean[] = [true, false, false, true, false];
*/

  // We Can Also make Array like this
  /*
  const numArray: Array<number> = [1, 2, 3, 4, 5];
  const stringArr: Array<string> = ["a", "b", "c", "d", "e"];
  const boolArr: Array<boolean> = [true, false, false, true, false];
*/

  // Or this
  /*
type ArrayType1 = Array<number>;
type ArrayType2 = Array<string>;
type ArrayType3 = Array<boolean>;
const numArray: ArrayType1 = [1, 2, 3, 4, 5];
const stringArr: ArrayType2 = ["a", "b", "c", "d", "e"];
const boolArr: ArrayType3 = [true, false, false, true, false];
*/

  // Or By Using Generic like this

  type ArrayType<P> = Array<P>;

  const numArray: ArrayType<number> = [1, 2, 3, 4, 5];
  const stringArr: ArrayType<string> = ["a", "b", "c", "d", "e"];
  const boolArr: ArrayType<boolean> = [true, false, false, true, false];

  console.log(numArray, stringArr, boolArr);

  //   Interface with generic
  interface IPerson<T, P> {
    name: string;
    age: T;
    address: string;
    phone: P;
  }

  const person1: IPerson<number, string> = {
    name: "Asif",
    age: 23,
    address: "Sirajganj",
    phone: "+8801712345678",
  };

  //   Generic in Function
  const showMessage = <T, Person>(message: T, personInfo: Person) => {
    return { message, personInfo };
  };
  console.log(
    showMessage<string, IPerson<number, string>>("Hello World!", {
      name: "Asif",
      age: 23,
      address: "Sirajganj",
      phone: "+8801712345678",
    })
  );

  //
}
