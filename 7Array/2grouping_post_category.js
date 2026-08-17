/**
 * Question 2: Grouping Blog Posts by Categories
Write a function groupByCategory that takes an array 
of blog post objects and groups them by their categories.
 */


function groupByCategory(posts) {
  //Your code here
  let programing = []; 
  let web_dev = [];

  posts.forEach((post) => {
    if(post.category === "Programming"){
      programing.push(post.title)
    }
    else if(post.category === "web Dev"){
      web_dev.push(post.title)
    }
  });
  return{
    "Programming":programing,
    "Web Dev": web_dev
  }

}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" }
];

const result = groupByCategory(posts);
console.log(result);
// Output: 
// {
//   "Programming": ["Learn JS", "Master React"],
//   "Web Dev": ["CSS Tips", "HTML Basics"]
// }


  