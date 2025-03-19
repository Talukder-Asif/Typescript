{
  //
  const isAdmin: boolean = true;
  const message: string | boolean = isAdmin ? "Welcome Admin" : isAdmin;
  //   console.log(message);

  // Optional chaining
  const data = {
    name: {
      firstName: "Asif",
      lastName: "Talukder",
    },
    address: "Sirajganj",
  };

  console.log(data?.name?.firstName);
  //
}
