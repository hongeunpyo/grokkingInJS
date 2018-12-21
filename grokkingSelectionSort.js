function findSmallest(arr) {
  var smallest = arr[0];
  var smallest_index = 0;
  var length = arr.length

  for(var i = 0; i < length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  var newArr = [];
  var length = arr.length;

  for(var i = 0; i < length; i++) {
    var smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1));
  }

  return newArr;
}

console.log("Expect [2, 3, 5, 6, 10]: " + selectionSort([5, 3, 6, 2, 10]));
