// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



var isValid = function (s) {
	let stack = s.split('');
    if (stack[0] == ')' ||stack[0] == ']' ||stack[0] == '}' ) {
        return false;
    } 
	let res = [];
	while (stack.length != 0) {
        res.push(stack.shift());
		if (
			(res[res.length - 2] == '(' && res[res.length - 1] == ')') ||
			(res[res.length - 2] == '{' && res[res.length - 1] == '}') ||
			(res[res.length - 2] == '[' && res[res.length - 1] == ']')
		) {
			res.pop();res.pop();
		}
	}
	return res.length == 0;
};
