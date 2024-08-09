function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (target <= arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (target < arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

let cards = [-10, -10, 2, 3, 3, 6, 7, 10, 10, 10];
let query = [10, 9, -5, 2, 3, 4, 5, -10];
let result = [];

query.forEach((m) => {
  result.push(
    upperBound(cards, m, 0, cards.length) -
      lowerBound(cards, m, 0, cards.length)
  );
});

console.log(result);
