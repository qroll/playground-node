const doAsyncAction = async (type) => {
  return new Promise((resolve, reject) => {
    const completeAction = () => {
      console.log(type);
      resolve(type);
    }
    setTimeout(completeAction, 1000);
  });
}

const A = () => doAsyncAction('A');
const B = (result) => doAsyncAction(result + 'B');
const C = (result) => doAsyncAction(result + 'C');

const task = [A, B, C];

class TaskManager {
  static get tasks() {
    if (!this._tasks) {
      this._tasks = {};
    }
    return this._tasks;
  }

  static execute(task, name) {
    const info = {
      status: 'pending',
      steps: task,
      progress: 0
    };
    TaskManager.tasks[name] = info;

    return Promise.resolve().then(async () => {
      let result;
      while (info.progress < info.steps.length) {
        if (info.status === 'cancelled') {
          throw new Error('cancelled'); // CancelError?
          break;
        }
        result = await info.steps[info.progress](result);
        info.progress++;
      }
    });
  }
}

const cancel = TaskManager.execute(task, 'ABC');
setTimeout(cancel, 500);