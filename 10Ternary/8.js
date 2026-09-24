// Write a function fileUploadStatus that checks upload progress (progress):

// If progress === 100, return "Upload Complete".
// If progress > 0, return "Uploading...".
// If progress === 0, return "Not Started".




function fileUploadStatus(progress) {
    //Your code
    return progress === 100?"upload complete":progress>0?"uploading....":"Not started"; 
}

// Test cases
console.log(fileUploadStatus(100)); // Output: "Upload Complete"
console.log(fileUploadStatus(50));  // Output: "Uploading..."
console.log(fileUploadStatus(0));   // Output: "Not Started"
console.log(fileUploadStatus(75));  // Output: "Uploading..."
console.log(fileUploadStatus(10));  // Output: "Uploading..."

  