// TODO: Write a function that finds the kth smallest element in a given array.
class Solution {
  kthSmallest(arr, l, r, k) {
    //code here
    let left = 0,
      right = 1;
    let temp = [arr[0]];
    while (right < r && left < r) {
      if (arr[left] > arr[right]) {
        temp.push(arr[right]);
        left = right;
        right++;
      } else {
        left++;
      }
    }
    return temp;
  }
}

const nums = new Solution();
console.log(nums.kthSmallest([7, 10, 4, 3, 20, 15], 0, 6, 3));
console.log(nums.kthSmallest([7, 10, 4, 20, 15], 0, 5, 4));
