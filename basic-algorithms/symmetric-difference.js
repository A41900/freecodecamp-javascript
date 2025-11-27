/**
 * Return the symmetric difference between two arrays.
 * That means: all elements that appear in one array but not in the other.
 * Demonstrates the use of filter(), includes() and flat() for array comparison.
 * Useful for training basic set operations and array manipulation.
 */

function diffArray (arr1, arr2){
  let res = [];
  res.push(arr1.filter( e => ! arr2.includes(e)))
  res.push(arr2.filter(e => ! arr1.includes(e)))
  return res.flat();

}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//should return ["pink wool"]. 

console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) )
// should return ["car", "train", "plane"]