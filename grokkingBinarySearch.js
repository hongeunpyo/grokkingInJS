function binary_search(list, item) { //Binary Search translated from grokking algorithims
  var low = 0; //low and high keep track of which part of the list you'll search in
  var high = list.length - 1;

  while(low <= high) { //if you haven't lowered it down to one element code will keep running
    var mid = Math.floor((low + high) / 2); //checks the middle element
    var guess = list[mid]
    if (guess === item) {
      //if item is found return the item
      return mid;
    } else if (guess > item) { //guess is too high
      high = mid - 1
    } else { //guess is too low
      low = mid + 1
    }
    mid = Math.floor((low + high) / 2) //need to recalculate mid at every iteration
  }
  return null; //return null if item doesn't exist in list
}

var my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3))

//Binary search written from hackernoon
function binarySearch (list, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}
