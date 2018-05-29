/**
* Repeat 3 times the contents of an array
* Looping through n until 0, and concataining the arr n times
* @param Array arr The initial array
* @return array The array with 3 times is content
* @exception If the parameter arr is not an array, throw an exception (ths function can only work with an array)
* @version 1.0 Kevin "Latsuj" Justal
**/
function repeat(arr) {
	// Check if the parameter is an array, if else throw an exception
	if(!(arr instanceof Array)) throw new Error("arr should be an array");
	
	var n=3,tmp=[];
	while(n--) tmp = tmp.concat(arr);
	return tmp;
}


/**
* No vowels, lowercase except the first letter
* @param str The initial string
* @return String The string with no voyel and in lowercase
* @exception If the str parameter is not a string or an object string, I throw an error
* @version 1.0 Kevin "Latsuj" Justal
**/
function reformat(str) {
	// Check if the parameter is a string, if else throw an exception
	if(!(typeof(str) === 'string' || str instanceof String)) throw new Error("str should be a string");
	
	// Remove the voyel of the string
	str = str.replace(/[aeiou]/gi, '');
	
	// Remove the first space or some non word caractere (I dont know if I have to do that or not)
	str = str.replace(/^\W*/gi, '');
	
	// Putting the string in lowercase except the first character
	return str.length>0 ? str[0].toUpperCase()+str.toLowerCase().substr(1) : "";
}

/**
* Just a function for finding the next binary number
* @param Array arr The initial array
* @return array The next binary number
* @exception If the parameter arr is not an array, throw an exception (ths function can only work with an array)
* @version 1.0 Kevin "Latsuj" Justal
**/
function next_binary_number(arr) {
	// Check if the parameter is an array, if else throw an exception
	if(!(arr instanceof Array) || arr.length==0) throw new Error("arr should be a not empty array");
	
	// If all the elements of the array are filling in with 1
	// we just fill an array with a 1 and some 0 depending of the arr.length
	// [1,1,1,1] => [1]+[0,0,0,0] => [1,0,0,0,0]
	if(arr.indexOf(0)==-1) {
		for(var i=arr.length,tmp = [1];i--;) tmp.push(0);
		return tmp;
	}
	// We loop through the arr from the end for finding the first 0 and changing him to 1
		for(var i=arr.length;i--;) {
		if(arr[i]==0) { 
			arr[i]=1;
			break;
		}
	}
	// Then we go in the other way and changing the 1 to 0
	for(i++;i<arr.length;i++) arr[i]=0;
	return arr;
}