function solution(str) {
  let reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

solution('blah blah');

//reversed loop for Reverse String
