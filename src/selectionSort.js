function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let out;
  let inside;
  let min;

  for (out = 0; out < arr.length; out++) {
    // outer loop
    min = out;
    //unsorted = arr.slice(out); //assume first element is minimum
    for (inside = out; inside < arr.length; inside++) {
      // inner loop
      if (arr[inside] < arr[min]) {
        min = inside;
      }
    }
    swap(arr, out, min);
  }
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}
