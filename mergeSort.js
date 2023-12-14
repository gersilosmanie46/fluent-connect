/**
 * Sorting Algorithms - Merge Sort
 *
 * Filename: mergeSort.js
 *
 * Description:
 * This program implements the merge sort algorithm in JavaScript. It is a
 * sophisticated and complex sorting algorithm that works by dividing the
 * input array into smaller sub-arrays, sorting them, and then merging them
 * back into the original array.
 *
 * The merge sort algorithm has a time complexity of O(n log n) in all cases,
 * making it efficient for sorting larger arrays.
 */

/**
 * Function: mergeSort
 * --------------------
 * Sorts the given array using the merge sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The sorted array in ascending order.
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Function: merge
 * --------------------
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {Array} left - The left sorted array.
 * @param {Array} right - The right sorted array.
 * @returns {Array} The merged sorted array.
 */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

// Test case
const arr = [9, 2, 5, 1, 8, 3, 7, 4, 6];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));
