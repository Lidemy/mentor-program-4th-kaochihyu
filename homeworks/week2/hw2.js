function capitalize(str) {
	var arr = str.split('')
	if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
		var change = arr[0].toUpperCase()
		str = str.replace(arr[0], change)
		return str
	} else {
		return str
	}
}

console.log(capitalize('hello'));
