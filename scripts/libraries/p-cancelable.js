const CancelablePromise = require('p-cancelable');

const p1 = new CancelablePromise((resolve, reject, onCancel) => {
  setTimeout(() => resolve("p1"), 1000);
});
p1.then(() => console.log(p1.isCanceled)) // this won't be called as the promise rejects
  .catch(err => console.log("p1 error:", err));
p1.cancel();

const p2 = new CancelablePromise((resolve, reject, onCancel) => {
  onCancel.shouldReject = false;
  setTimeout(() => resolve("p2"), 1000);
});
p2.then(() => console.log(p2.isCanceled)); // this is called because we set shouldReject to false
p2.cancel();

const p3 = new CancelablePromise((resolve, reject, onCancel) => {
  setTimeout(() => resolve("p3"), 1000);
});
const p4 = () => new Promise(resolve => setTimeout(resolve, 2000));
p3
  .then(p4)
  .catch(err => console.log("p3 error", err));
setTimeout(p3.cancel, 2000); // this doesn't work because p3 has completed, p4 is still running
