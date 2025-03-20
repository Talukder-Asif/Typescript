{
  //
  function getLength<T extends { length: number }>(str: T) {
    console.log(str.length);
  }
  getLength<string>("Hello World");
  //
}
