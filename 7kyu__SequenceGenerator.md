# Codewars
## Sequence generator
#### 7 kyu


```
Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
number, string or any other object, then filled by copying, this object n-times.
Examples:

sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
```
### Solution:

```javascript
function sequence(n, pattern) {
  let newArr = [];
  while (newArr.length < n) {
   newArr.push(pattern);
  }
  if (typeof pattern === 'function') {
    return newArr.map(pattern);
  } else {
    return newArr;
  }
}
```
