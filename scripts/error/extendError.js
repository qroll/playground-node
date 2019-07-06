class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    // this.stack = new Error().stack;
    this.name = this.constructor.name;
  }
}

class RequestError extends ExtendableError {
  constructor(m) {
    super(m);
  }
}

try {
  throw new RequestError();
} catch (err) {
  console.log(typeof err);
  console.log(err instanceof Error);
  console.log(err instanceof ExtendableError);
}