//Prompt: Write a recursive function to count the number of items in a list.
var list = ['1', 1, 'and', true]; //list made with different types of data
//only need count so content of list should not matter
function count(arr) {
  //make case if arr is empty
  if(arr.length === 0) return 0; // since we are adding we will add 0 at the end of the call stack
  else {
    return 1 + count(arr.slice(1)); //adds 1 to call stack and removes first entry in array
  }
}

console.log(count(list));
