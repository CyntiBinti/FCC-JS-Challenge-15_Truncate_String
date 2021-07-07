function truncateString(str, num) {
let arr = str;
let truncated = arr.slice(0, (num));
return truncated + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
