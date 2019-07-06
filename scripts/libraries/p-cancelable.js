const CancelablePromise = require('p-cancelable');

const p1 = new CancelablePromise((resolve, reject, onCancel) => {
  setTimeout(() => resolve("p1"), 1000);
});
p1.then(() => console.log(p1.isCanceled)) // this won't be called as the promise rejects
  .catch(err => console.log(err));
p1.cancel();

const p2 = new CancelablePromise((resolve, reject, onCancel) => {
  onCancel.shouldReject = false;
  setTimeout(() => resolve("p2"), 1000);
});
p2.then(() => console.log(p2.isCanceled)); // this is called because we set shouldReject to false
p2.cancel();
