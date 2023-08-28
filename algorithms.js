//QuickSort

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else if (arr[i] > pivot) {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

//BubbleSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

//Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    function merge(left, right) {
        let arr = []
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }
        return [ ...arr, ...left, ...right ]
    }
    return merge(left, right)
}

module.exports = {
    quickSort,
    bubbleSort,
    mergeSort,
}

