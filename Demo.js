function quickSort(start, end, arr) {
  let mid = Math.floor((start + end) / 2);
  if (start < end) {
    let j = partition(start, end, arr);
    quickSort(start, j - 1, arr);
    quickSort(j + 1, end, arr);
  }
  return arr;
}

function partition(start, end, arr) {
  let pivot = arr[end],
    j = start - 1;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      j++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[j + 1], arr[end]] = [arr[end], arr[j + 1]];
  return j + 1;
}

console.log(quickSort(0, 5, [6, 5, 4, 3, 2, 1]));
