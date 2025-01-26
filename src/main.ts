//Dummy file from https://www.typescriptlang.org/docs/handbook/2/basic-types.html
// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date?: Date) {;
  const _date = date ?? new Date()
  console.log(`Hello ${person}, today is ${_date}!`);
}

greet("Schirrel");
