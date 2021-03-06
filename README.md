# Limesharp test

Fork this repo, commit changes after each task and send us the link to your repo (don't do a Pull Request, just send us the link).
We will get back to you shortly. 
Languages accepted: Javascript or PHP. 

### Task 1: 
Make this work (repeat 3 times the contents of an array):
```javascript
repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]
```
Your solution:

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

##TEST
repeat([1,2,3]) => [1, 2, 3, 1, 2, 3, 1, 2, 3]
repeat([1,2]) => [1, 2, 1, 2, 1, 2]
repeat([]) => []
repeat("test") => Exception
repeat([1]) => [1,1,1]

###### if we type in our console your function and repeat([1,2,3]) then the result should be [1,2,3,1,2,3,1,2,3] 

### Task 2:
Make this work (no vowels, lowercase except the first letter):
```javascript
reformat("liMeSHArp DeveLoper TEST") //Lmshrp dvlpr tst
```
Your solution:

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

## TEST
reformat("liMeSHArp DeveLoper TEST") => "Lmshrp dvlpr tst"
reformat("a liMeSHArp DeveLoper TEST") => "Lmshrp dvlpr tst"
reformat("") => ""
reformat([0]) => Exception
reformat("aeiou") => ""

###### if we type in our console your function and reformat("liMeSHArp DeveLoper TEST") then the result should be Lmshrp dvlpr tst


### Task 3 (optional, for bonus points):
Make this work (without using any built in functions, only a `for` loop, return the next binary number in a string or as an array)
```javascript
next_binary_number([1,0]) // [1,1]

// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]
```
Your solution:

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

##TEST
next_binary_number([1,1,1,1]); => [1, 0, 0, 0, 0]
next_binary_number([1,1]); => [1,0,0]
next_binary_number([1]); => [1,0]
next_binary_number([]); => Exception
next_binary_number([1,0,1]); => [1, 1, 0]
next_binary_number([1,0]); => [1, 1]
next_binary_number([1,0,1,0]); => [1, 0, 1, 1]

###### if we type in our console your function and next_binary_number([1,0,0,0,0,0,0,0,0,1]) then the result should look like 1,0,0,0,0,0,0,0,1,0 (or as an array).

###### If you get invited to the first interview read the What to expect.md file.
