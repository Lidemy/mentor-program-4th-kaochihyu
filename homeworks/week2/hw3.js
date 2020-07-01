function reverse(str) {
	var arr = str.split('')
  var change = []
  var result = ''
  for (var i = arr.length - 1; i >= 0; i--) {
  	change.push(arr[i])
    result = change.join('')
  } console.log(result)  
}

reverse('hello');
