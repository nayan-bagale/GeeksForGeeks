const func = (arr, N) => {
    let zeros = 0,
      ones = 0,
      twos = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i] === 0) {
        zeros++;
      } else if (arr[i] === 1) {
        ones++;
      } else if (arr[i] === 2) {
        twos++;
      }
    }

    for (let i = 0; i < zeros; i++) {
      arr[i] = 0;
    }
    for (let i = zeros; i < ones+zeros; i++) {
      arr[i] = 1;
    }
    for (let i = zeros+ones; i < N; i++) {
      arr[i] = 2;
    }

    return arr
}

console.log(func([0,2,1,2,0],5))