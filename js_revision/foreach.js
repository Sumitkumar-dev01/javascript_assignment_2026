let items_in_cart = ["apple","banana","mango","carrot","redish"]; 
items_in_cart.forEach((items)=>console.log(items)); 


items_in_cart.forEach((item,index,arr)=>
    console.log(`the item ${item} was added to cart in position ${index+1} `), 
)



// it always takes callback function as an argument and you have to keep in mind 


