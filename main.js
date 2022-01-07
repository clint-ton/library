let bookList = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    bookList.push(this);
}

Book.prototype.info = function() {
    var readText;
    if (this.read) {
        readText = 'finished.';
    } else {
        readText = 'not finished yet.'
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`
}

function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hidden')
}

function createCard(book) {
    // returns an info card ready to be appended to the DOM.
    // const card = 
}

function populateTable(list) {
    for (let i = 0; i < list.length; i++) {
        const card = createCard(bookList[i]);
        // appends to the dom
        
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
document.querySelector('#add-btn').addEventListener('click', toggleModal);
document.querySelector('#close-btn').addEventListener('click', toggleModal);
