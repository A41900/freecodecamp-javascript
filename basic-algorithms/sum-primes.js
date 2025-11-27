/**
 * Sum all prime numbers up to and including a given number.
 * Useful for training loops, prime validation logic and helper functions.
 * Time complexity: O(n²) in the naive version (can be optimized).
 */

function sumPrimes (number) {
  if (number<2) return 0;

  let i = 2;
  let res = 0;
  while(i<=number){
    if (isPrime(i))
      res+=i;
    ++i;
  }
  
  return res;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
