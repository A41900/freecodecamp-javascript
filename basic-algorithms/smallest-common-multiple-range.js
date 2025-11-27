/**
 * Find the smallest common multiple of a range of integers.
 * Uses a helper function to calculate the LCM via the GCD (Euclid's algorithm).
 * Demonstrates reduce(), recursion and mathematical logic.
 */

function mdc(x,y) {
    if (y === 0 ) return x;
    return mdc (y, x%y)
}

function lcm(x,y) {
    const max = mdc(x,y)
    return (x*y) / max;
}

function smallestCommons(arr) {
    arr.sort((a,b)=> a-b);
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        res.push(i);
    }
    return res.reduce((acc,n)=> lcm(acc,n),res[0])
}

console.log(smallestCommons([1, 5])) //60