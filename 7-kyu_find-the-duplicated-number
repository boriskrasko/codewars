function findDup (arr) {
  arr = arr.sort((a, b) => a - b);
  let duplicateValue;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      duplicateValue = arr[j];
    };
  };
};
  return duplicateValue;
}
