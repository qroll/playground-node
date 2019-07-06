setTimeout(() => console.log("child process"), 5000);


process.on('exit', () => console.log("child exit"));
process.on('SIGINT', () => console.log("child SIGINT"));
