function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        setPosition(arr, i)
    }
}

function setPosition(array, position) {
    let smallestNum = Infinity
    let smallestNumIndex = null

    for (let i = position; i < array.length; i++) {
        if (smallestNum === null || array[i] < smallestNum) {
            smallestNum = array[i]
            smallestNumIndex = i
        }
    }

    swap(array, position, smallestNumIndex)
}

function swap(arr, position, smallNumIndex) {
    let x = arr[position]
    let y = arr[smallNumIndex]
    arr[smallNumIndex] = x
    arr[position] = y
}
