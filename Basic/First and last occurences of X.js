class Solution {
  search(arr, N, X, bool) {
    let start = 0,
      end = N - 1,
      ans = -1;

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (arr[mid] > X) {
        end = mid - 1;
      } else if (arr[mid] < X) {
        start = mid + 1;
      } else {
        ans = mid;
        if (bool) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }

    return ans;
  }

  firstAndLast(arr, N, X) {
    //your code here
    let ans = [-1];
    ans[0] = this.search(arr, N, X, true);
    if (ans[0] !== -1) ans[1] = this.search(arr, N, X, false);
    return ans;
  }
}

let s = new Solution();

console.log(s.firstAndLast([1, 3, 3, 4], 4, 3));
console.log(s.firstAndLast([1, 2, 3, 4], 4, 5));
console.log(s.firstAndLast([1, 2, 3, 4, 5, 6], 6, 5));
