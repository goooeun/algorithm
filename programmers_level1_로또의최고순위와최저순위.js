function solution(lottos, win_nums) {
  var answer = [];

  const incorrectLottos = lottos.filter((item) => !win_nums.includes(item));

  const totalCount = lottos.length;
  const incorrectCount = incorrectLottos.length;
  const correctNumberCount = totalCount - incorrectCount;
  const unknownNumberCount = incorrectLottos.filter(
    (item) => item === 0
  ).length;

  // 로또 순위
  // 최고 순위 => 총카운트 - (맞은 번호 수 + 알아 볼 수 없는 번호 수) + 1
  // 최저 순위 => 총카운트 - 맞은 번호수 + 1
  const topRank =
    correctNumberCount == 0 && unknownNumberCount == 0
      ? 6
      : totalCount - (correctNumberCount + unknownNumberCount) + 1;
  const lowestRank =
    correctNumberCount > 1 ? totalCount - correctNumberCount + 1 : 6;

  answer.push(topRank);
  answer.push(lowestRank);

  return answer;
}

/*
    다른 사람 풀이 참고
    
    로또의 총 카운트와 로또 순위는 당첨번호 수는 고정값이므로 굳이 나처럼 변수로 처리할 필요가 없다.
    const rank = [6, 6, 5, 4, 3, 2, 1];

    topRank => rank[correctNumberCount + unknownNumberCount]
    lowestRank => rank[correctNumberCount]

    로 표현하여 훨씬 간단하게 표현할 수 있다.
    
*/
