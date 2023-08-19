class Solution {
  count(arr, n, x) {
    //code here
    let endIndex = this.search(arr,n,x,false)+1
    if (!endIndex) return endIndex;
    let startIndex = this.search(arr, n, x, true)+1;
    let ans = endIndex + 1 - startIndex

    return ans
  }

  search(arr, n, x, bool){
    let start = 0,
    end = n-1,
    ans = -1,
    mid;

    while(start <= end){
        mid = start + Math.floor((end - start)/2);

        if(arr[mid] < x){
            start = mid + 1;
        }else if(arr[mid] > x){
            end = mid - 1;
        }else{
            ans = mid;
            if(bool){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
    }
    return ans
  }

}

let s = new Solution;

console.log(s.count([1, 1, 2, 2, 2, 2, 3],7, 2));//4
console.log(s.count([1, 1, 2, 2, 2, 2, 3],7,4));//0
console.log(s.count([10,11],2,10));//1