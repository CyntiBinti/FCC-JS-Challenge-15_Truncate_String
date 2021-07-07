function truncateString(str, num) {
let arr = str;
let truncated = arr.slice(0, (num));
console.log(truncated+'...');
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
