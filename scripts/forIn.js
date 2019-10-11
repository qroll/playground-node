let arr = ['a'];

for (let i in arr) {
  console.log(">>> i", i, typeof i, arr[i]);
}

for (let i of arr) {
  console.log(">>>>> i", i, typeof i)
}