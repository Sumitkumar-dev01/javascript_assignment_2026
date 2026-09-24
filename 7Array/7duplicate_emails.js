/**
 *  Question 7: Removing Duplicate Emails
Write a function removeDuplicates that takes an array of emails and removes duplicate values.
 */



function removeDuplicates(emails) {
  //Your code here
  return Array.from(new Set(emails))
 
}

// Example Usage:
const emails = [
  "user1@mail.com",
  "user1@mail.com",
  "user2@mail.com",
  "user3@mail.com",
  "user2@mail.com"
];

const uniqueEmails = removeDuplicates(emails);

console.log(uniqueEmails);
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]

  


// when it comes to find duplicate just use set. 
