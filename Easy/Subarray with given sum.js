//TODO: Solve it

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    //your code here
    let sum = arr[0];
    let i = 0,
      j = 1;
    while (i < n) {
      if (sum === s){
        return [i+1,j]
      }else if(sum > s){
         sum = sum - arr[i]
        i++
        continue
      }
      sum = sum + arr[j];
      j++;
    }
    return [-1]
  }
}

let s = new Solution;

console.log(s.subarraySum([1,2,3,7,5],5,12))// 2 4
console.log(s.subarraySum([1,2,3,4,5,6,7,8,9,10],10,15))// 1 5