const foo = 'foo';

const func = ({ foo = foo }) => {
  console.log(">>> foo", foo);
}

func({}); // this throws because foo is not defined