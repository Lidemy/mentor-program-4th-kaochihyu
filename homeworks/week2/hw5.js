function join(arr, concatStr) {
  if (arr.length === 0) {
    return ''
  }
  var result = arr[0]
  for (var i = 1; i < arr.length; i++) {
  	result += concatStr + arr[i]
  } return result 
}

function repeat(str, times) {
  var result2 = ''
  for (var i = 0; i < times; i++) {
       result2 += str
  } return result2
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
