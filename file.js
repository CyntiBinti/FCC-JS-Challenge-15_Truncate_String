function truncateString(str, num) {
  if (str.length > num) {
    let regex = new RegExp ();
    return str.replace(regex);
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
