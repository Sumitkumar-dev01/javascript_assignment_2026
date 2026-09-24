// Create a Dropdown constructor function for multi-level dropdown menus. Each menu has label, items (array of submenus or options), and isOpen. Add methods toggle() to open/close the dropdown and render() to display the menu structure.



function Dropdown(label, items) {
 //Your code here
}

// Example Usage:
const dropdown = new Dropdown("File", ["New", { label: "Open", items: ["Recent", "Browse"] }]);
dropdown.toggle();
dropdown.render();
// Output:
// File (Open)
// - New
// - Open
//   - Recent
//   - Browse

  