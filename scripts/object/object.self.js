const obj = {
  bar: () => obj.foo(),
  foo: () => console.log("hi"),
  barz: () => obj.fooz(),
  fooz: function () { console.log(this) }
};

obj.bar();
obj.barz();