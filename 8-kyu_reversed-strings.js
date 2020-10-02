//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'


function solution(str){
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
    result = `${result}${str[i]}`;
    i--;
  }
  return result;
}
