Results for Sorting Algorithm Performance Analysis

Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------
2            | 0.040 ms       | 0.100 ms       | 0.100 ms
5            | 0.017 ms       | 0.017 ms       | 0.047 ms
10           | 0.038 ms       | 0.021 ms       | 0.063 ms
20           | 0.056 ms       | 0.031 ms       | 0.100 ms
50           | 0.201 ms       | 0.210 ms       | 0.640 ms
100          | 0.706 ms       | 1.342 ms       | 1.718 ms
250          | 0.831 ms       | 3.371 ms       | 1.412 ms
300          | 1.199 ms       | 3.632 ms       | 1.931 ms
500          | 1.843 ms       | 4.197 ms       | 2.581 ms
1000         | 2.385 ms       | 5.167 ms       | 4.709 ms
2000         | 3.059 ms       | 10.094 ms      | 8.380 ms
3000         | 4.045 ms       | 16.200 ms      | 9.402 ms


for an array with 2 elements, QuickSort runs in 0.060 second for an ascending array, 0.022 seconds for a descending array, and 0.020 seconds for a random array. 
mergeSort runs in 0.033 second for an ascending array, 0.032 seconds for a descending array, and 0.228 seconds for a random array
bubbleSort runs in 0.010 second for an ascending array, 0.009 seconds for a descending array, and 0.207 seconds for a random array

for an array with 5 elements, QuickSort runs in 0.032 second for an ascending array, 0.017 seconds for a descending array, and 0.017 seconds for a random array.
mergeSort runs in 0.051 second for an ascending array, 0.053 seconds for a descending array, and 0.038 seconds for a random array
bubbleSort runs in 0.011 second for an ascending array, 0.022 seconds for a descending array, and 0.013 seconds for a random array

for an array with 10 elements, QuickSort runs in 0.041 second for an ascending array, 0.033 seconds for a descending array, and 0.038 seconds for a random array.
mergeSort runs in 0.049 second for an ascending array, 0.077 seconds for a descending array, and 0.061 seconds for a random array
bubbleSort runs in 0.021 second for an ascending array, 0.024 seconds for a descending array, and 0.019 seconds for a random array

for an array with 20 elements, QuickSort runs in 0.083 second for an ascending array, 0.042 seconds for a descending array, and 0.044 seconds for a random array.
mergeSort runs in 0.077 second for an ascending array, 0.120 seconds for a descending array, and 0.112 seconds for a random array
bubbleSort runs in 0.031 second for an ascending array, 0.037 seconds for a descending array, and 0.029 seconds for a random array

for an array with 50 elements, QuickSort runs in 0.419 second for an ascending array, 0.094 seconds for a descending array, and 0.091 seconds for a random array.
mergeSort runs in 0.154 second for an ascending array, 0.163 seconds for a descending array, and 0.990 seconds for a random array
bubbleSort runs in 0.246 second for an ascending array, 0.181 seconds for a descending array, and 0.196 seconds for a random array

for an array with 100 elements, QuickSort runs in 0.628 second for an ascending array, 0.767 seconds for a descending array, and 0.723 seconds for a random array.
mergeSort runs in 0.968 second for an ascending array, 1.718 seconds for a descending array, and 2.038 seconds for a random array
bubbleSort runs in 0.061 second for an ascending array, 1.018 seconds for a descending array, and 2.368 seconds for a random array

for an array with 250 elements, QuickSort runs in 0.831 second for an ascending array, 0.485 seconds for a descending array, and 0.390 seconds for a random array.
mergeSort runs in 2.136 second for an ascending array, 1.104 seconds for a descending array, and 0.997 seconds for a random array
bubbleSort runs in 3.646 second for an ascending array, 3.616 seconds for a descending array, and 2.817 seconds for a random array

for an array with 300 elements, QuickSort runs in 0.928 second for an ascending array, 0.601 seconds for a descending array, and 2.069 seconds for a random array.
mergeSort runs in 2.333 second for an ascending array, 1.284 seconds for a descending array, and 1.931 seconds for a random array
bubbleSort runs in 3.623 second for an ascending array, 4.877 seconds for a descending array, and 2.970 seconds for a random array

for an array with 500 elements, QuickSort runs in 1.344 second for an ascending array, 3.514 seconds for a descending array, and 0.671 seconds for a random array.
mergeSort runs in 3.199 second for an ascending array, 1.600 seconds for a descending array, and 2.945 seconds for a random array
bubbleSort runs in 3.703 second for an ascending array, 5.695 seconds for a descending array, and 3.193 seconds for a random array

for an array with 1000 elements, QuickSort runs in 5.899 second for an ascending array, 1.157 seconds for a descending array, and 0.101 seconds for a random array.
mergeSort runs in 4.709 second for an ascending array, 3.205 seconds for a descending array, and 5.593 seconds for a random array
bubbleSort runs in 5.459 second for an ascending array, 6.092 seconds for a descending array, and 3.957 seconds for a random array

for an array with 2000 elements, QuickSort runs in 8.087 second for an ascending array, 0.652 seconds for a descending array, and 0.438 seconds for a random array.
mergeSort runs in 9.751 second for an ascending array, 9.755 seconds for a descending array, and 5.636 seconds for a random array
bubbleSort runs in 10.094 second for an ascending array, 10.672 seconds for a descending array, and 8.245 seconds for a random array

for an array with 3000 elements, QuickSort runs in 10.785 second for an ascending array, 1.116 seconds for a descending array, and 0.234 seconds for a random array.
mergeSort runs in 10.903 second for an ascending array, 13.083 seconds for a descending array, and 4.222 seconds for a random array
bubbleSort runs in 16.906 second for an ascending array, 16.196 seconds for a descending array, and 16.200 seconds for a random array


CONCLUSION: the length for which QuickSort and Merge Sort begin to consistently exceed BubbleSort from 250 elements. Although 100 of QuickSort items try to surpass BubbleSort, but MergeSort will work more freely.
Additionally, BubbleSort is suitable for sorting small arrays, while QuickSort and Merge Sort are suitable for very large arrays.
