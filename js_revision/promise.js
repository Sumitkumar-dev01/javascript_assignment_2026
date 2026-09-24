const GITHUB_API = "https://api.github.com/users/Sumitkumar-dev01"

const user = fetch(GITHUB_API); 

console.log(user);   

user.then(function(data){
    // console.log(data)
    console.log(data.body)  
})




