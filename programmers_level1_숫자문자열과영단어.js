/**
 * [PROGRAMMERS] 숫자 문자열과 영단어
 *
 */

function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  words.forEach((word, index) => {
    if (s.indexOf(word) > -1) {
      s = s.replace(new RegExp(word, "g"), index);
    }
  });

  return Number(s);
}
