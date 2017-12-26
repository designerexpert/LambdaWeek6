function mergeObjects(arr) {
  let target = arr[0];
  arr.forEach(object => {
    Object.assign(target, object);
  });
  return target;
}

let arr = [
  { 1: '1', 2: '2', 3: '3' },
  { 3: '4', 4: '4', 5: '6' },
  { 5: '5', 6: '6', 7: '7' },
];
mergeObjects(arr);