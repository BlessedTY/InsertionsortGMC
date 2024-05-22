function insertionSort(arr) {
    // Loop from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        // Pick the element to be inserted
        let key = arr[i];
        // Initialize j to be the index before i
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Place the key at its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original array: ", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array: ", sortedArr);
