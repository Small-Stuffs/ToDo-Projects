function findOdd(A) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
);
