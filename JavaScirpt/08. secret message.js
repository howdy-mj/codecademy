let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // remove the last string
// console.log(secretMessage.length);

secretMessage.push('to', 'Program'); // add the words

secretMessage[7] = 'right'; // replace the word
// console.log(secretMessage);

secretMessage.shift(); // remove the first string

secretMessage.unshift('Programming'); // add the string to the beginning
// console.log(secretMessage);

secretMessage.splice(6, 5, 'know'); // remove 'get' ~ 'time'
console.log(secretMessage.join(' '));