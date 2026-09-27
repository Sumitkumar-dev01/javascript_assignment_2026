// Write a function isValidIP to check if a string is a valid IP address in either IPv4 or IPv6 format.


function isValidIP(ip) {
  //Your code here
  // regex -> regular expression 
  const ipv4Regex = /^(25[0-5]|2[0-4]d|1d{2}|d{1,2})(.(?!$)){3}(25[0-5]|2[0-4]d|1d{2}|d{1,2})$/;
  return ipv4Regex.test(ip)

}

// Example usage:
console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("999.999.999.999")); // false

  