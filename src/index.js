module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return result;
  } else {
    let i = 0;
    while (i < matrix.length) {
      if (i % 2 == 0) {
        result = result.concat(matrix[i]);
      } else {
        result = result.concat(matrix[i].reverse());
      }
      i++;
    }
    return result;
  }
}
