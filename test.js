function test() {
  const result = [];

  for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(test());
