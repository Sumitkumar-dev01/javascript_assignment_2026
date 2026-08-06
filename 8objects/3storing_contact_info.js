/**
 * Description:Write a program in javascript to store and manage contact information (such as name, phone number, email, and address) using JavaScript objects. .where the contactList is an array that will store all the contacts.Define a Contact constructor function that takes four parameters name, phone, email, and address. This constructor allows us to create multiple contact objects with these properties.The addContact() function accepts the details of a new contact and creates a Contact object using the constructor.The newly created contact is then added to the contactList array using the push() method.The updateContactInfo() method updates the phone number and email of an existing contact. It takes a contact object and the new phone number and email as parameters, then updates the contact’s phone and email properties.This displayContactDetails method accepts a contact object and logs its details (name, phone number, email, and address) to the console.
 */




// Function to create a shopping cart object
// Function to create a Contact object constructor
function createContact(name, phone, email, address) {
    return {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
}

// Function to create a Contact List object
function createContactList() {
    const contactList = [];

    // Method to add a new contact to the list
    

    // Method to display contact details
    

    // Method to update a contact's phone number or email
    

    // Return methods to interact with the contact list
    
}

// Create a contact list instance
const myContactList = createContactList();

// Add initial contacts to the contact list
myContactList.addContact("John Doe", "555-1234", "john@example.com", "123 Elm Street, Springfield");
myContactList.addContact("Jane Smith", "555-5678", "jane@example.com", "456 Oak Avenue, Metropolis");

// Display the first contact's details
myContactList.displayContactDetails(myContactList.contactList[0]);

// Update the second contact's phone number and email
myContactList.updateContactInfo(myContactList.contactList[1], "555-8765", "jane.smith@example.com");

// Display the updated second contact's details
console.log("\nUpdated Contact Details:");
myContactList.displayContactDetails(myContactList.contactList[1]);







