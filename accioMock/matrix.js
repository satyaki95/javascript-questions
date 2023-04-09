function maxNonNegativeProduct(matrix) {
  let maxProduct = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] >= 0) {
        let maxEndingHere = 1;
        let minEndingHere = 1;
        for (let k = j; k < matrix[0].length; k++) {
          const product = maxEndingHere * matrix[i][k];
          const negativeProduct = minEndingHere * matrix[i][k];
          maxEndingHere = Math.max(matrix[i][k], product, negativeProduct);
          minEndingHere = Math.min(matrix[i][k], product, negativeProduct);
          maxProduct = Math.max(maxProduct, maxEndingHere);
        }
      }
    }
  }
  return maxProduct;
}
