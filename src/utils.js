export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      points += 1;
    } else {
      points += 2;
    }
  }
  return points;
}
it("handles uppercase and lowercase input", () => {
  const word = "tEsT";
  const points = pointsForWord(word);
  expect(points).toBe(7);
});
