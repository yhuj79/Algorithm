function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 13;

console.log(binarySearch(arr, target, 0, arr.length));
