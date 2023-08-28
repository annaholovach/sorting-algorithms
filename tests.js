const {quickSort, mergeSort, bubbleSort} = require("./algorithms");
const {createRandomArray, createSortedBackwardArray, createSortedArray} = require("./arrays")

const sortedArray = createSortedArray(1, 100, 1)
const reversedArray = createSortedBackwardArray(100, 1, 1)
const randomArray = createRandomArray(100)

function test(fn) {
    return function (...args) {
        let start = performance.now()
        fn(...args)
        let end = performance.now()
        return `Results for ${fn.name} Algorithm: ${(end - start).toFixed(3)}ms`
    }
}

// console.log(quickSort(sortedArray))
// console.log(quickSort(reversedArray))
// console.log(quickSort(randomArray))

const testQuickSort = test(quickSort)

console.log(testQuickSort(sortedArray))
console.log(testQuickSort(reversedArray))
console.log(testQuickSort(randomArray))
console.log('\n')



// console.log(mergeSort(sortedArray))
// console.log(mergeSort(reversedArray))
// console.log(mergeSort(randomArray))

const testMergeSort = test(mergeSort)

console.log(testMergeSort(sortedArray))
console.log(testMergeSort(reversedArray))
console.log(testMergeSort(randomArray))
console.log('\n')



// console.log(bubbleSort(sortedArray))
// console.log(bubbleSort(reversedArray))
// console.log(bubbleSort(randomArray))

const testBubbleSort = test(bubbleSort)

console.log(testBubbleSort(sortedArray))
console.log(testBubbleSort(reversedArray))
console.log(testBubbleSort(randomArray))