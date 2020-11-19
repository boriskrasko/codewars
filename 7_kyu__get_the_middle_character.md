# Codewars
## Get the Middle Character
#### 7 kyu


```
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```
### Solution:

```javascript
function getMiddle(s)
{ 
  let strLength = s.length;
  let middle = (strLength % 2 === 0) ? s.slice(Math.floor(strLength / 2) - 1, (Math.floor(strLength / 2) + 1 )) : s.slice(strLength/2, strLength/2 + 1);
  return middle;
}
```
