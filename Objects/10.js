var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
 ];
 
// Function to compare objects based on libraryID
function compare(a, b) {
    if (a.libraryID < b.libraryID) {
        return -1;
    }
    if (a.libraryID > b.libraryID) {
        return 1;
    }
    return 0;
}

// Sorting the array using the compare function
library.sort(compare);

// printing the output the sorted array
console.log(library);
 