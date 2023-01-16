const { writeFileSync } = require("fs");
const data = require("../data/data.json");


function merge(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    const res = arr1[i][1].localeCompare(arr2[j][1])
    if (res <= 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// writeFileSync('./data/data-2.json', JSON.stringify(mergeSort(data)), { encoding: 'utf-8' })

