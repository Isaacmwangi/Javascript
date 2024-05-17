var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

// Loop through each book in the library using forEach

library.forEach(book => {
        // For each book, log its title, author, and reading status to the console
        console.log(`Book Name: ${book.title}\nAuthor: ${book.author}\nReading Status: ${book.readingStatus}`);
});


