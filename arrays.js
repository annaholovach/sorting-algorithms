function createRandomArray(arrayLength) {
    const array = []
    const min = 1
    const max = 100
    for (let i = 0; i < arrayLength; i++) {
        let rand = min + Math.random() * (max + 1 - min);
        array.push(Math.floor(rand))
    }
    return array
}

function createSortedArray(from, to, space) {
    const array = []
    for (let i = from; i <= to; i += space) {
        array.push(i)
    }
    return array
}

function createSortedBackwardArray (from, to, space) {
    const array = []
    for (let i = from; i >= to; i -= space) {
        array.push(i)
    }
    return array
}

// console.log(createRandomArray(6))
// console.log(createSortedArray(1, 20, 5))
// console.log(createSortedBackwardArray(2, 1, 1))

module.exports = {
    createSortedArray,
    createSortedBackwardArray,
    createRandomArray
}