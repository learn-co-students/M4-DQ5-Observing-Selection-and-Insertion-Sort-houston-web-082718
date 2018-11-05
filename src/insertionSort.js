function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
      j = i
      while (j > 0 && arr[j-1] > arr[j]) {
          swap(arr, j, j-1)
          j -= 1
      }
  }
}

function swap(arr, num1, num2) {
    let x = arr[num1]
    let y = arr[num2]
    arr[num2] = x
    arr[num1] = y
}
