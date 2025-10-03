// Heapify function (max heap property)

//      13
//    11  12
//   5  6   7

function heapify(arr, n, i) {
  // [12, 11, 13, 5, 6, 7];
  // n = 6
  let largest = i; // larget = 0
  let left = 2 * i + 1; // left = 1
  let right = 2 * i + 2;// right = 2


  if (left < n && arr[left] > arr[largest]) {
    // 5<6:true && 7>13:false : false
    // 3<6:true && 5>11:false : false
    // 1<6:true && 11>12:false
    largest = left;
  }

  // 6<6:false : false
  // 4<6:true && 6>11:false : false
  // 2<6:true && 13>12:true
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
    // largest = 2
  }

  // 2 != 0
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest); // recursion
  }
}

// [12, 11, 13, 5, 6, 7];
// Function to build max heap
function buildMaxHeap(arr) {
  let n = arr.length; // n = 6
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // i=0
    heapify(arr, n, i); // [12, 11, 13, 5, 6, 7],6,2
  }
}

// Function to extract max one by one into separate array
function extractMaxElements(arr) {
  let result = [];
  let n = arr.length;

  // Step 1: Build max heap
  buildMaxHeap(arr);

  // Step 2: Keep extracting max until heap is empty
  while (arr.length > 0) {
    let max = arr[0]; // root is max
    result.push(max); // store in result
    arr[0] = arr[arr.length - 1]; // move last element to root
    arr.pop(); // remove last element
    heapify(arr, arr.length, 0); // restore heap property
  }

  return result;
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr);

let extracted = extractMaxElements([...arr]); // use copy of arr
console.log("Extracted in order (descending):", extracted);
