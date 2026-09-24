// Write a program in javascript where create a array category with attribute name and subcategory and subcategory further contain name.The printCategories function traverses each node in the tree-like structure. If a category has subcategories, it calls itself recursively to process those subcategories.


const categories = [
  { name: "Electronics", subcategories: [
      { name: "Mobile Phones", subcategories: [
          { name: "Smartphones" }, { name: "Feature Phones" }
        ]},
      { name: "Laptops" }
    ]},
  { name: "Clothing", subcategories: [
      { name: "Men's" }, { name: "Women's" }
    ]}
];

function printCategories(categories) {

  //  Your code here

}

printCategories(categories);
