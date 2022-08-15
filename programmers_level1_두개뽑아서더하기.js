function solution(numbers) {
  let result = [];

  while (numbers.length > 1) {
    for (let i = 1; i < numbers.length; i++) {
      result.push(numbers[0] + numbers[i]);
    }
    numbers.shift();
  }

  return [...new Set(result)].sort((prev, next) => prev - next);
}