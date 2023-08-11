class Solution {
  //Function to check if brackets are balanced or not.
  ispar(x) {
    //your code here
    let array = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "(" || x[i] === "[" || x[i] === "{") {
        array.push(x[i]);
      } else {
        const pop = array.pop();
        if (
          (x[i] === ")" && pop === "(") ||
          (x[i] === "]" && pop === "[") ||
          (x[i] === "}" && pop === "{")
        ) {
          continue;
        } else {
          array.push(x[i]);
        }
      }
    }

    return array.length < 1;
  }
}
