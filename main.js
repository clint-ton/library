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
    // returns a card element using the given books data
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardButtons = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('span');
    const pgnum = document.createElement('span');
    const removeButton = document.createElement('button')
    const toggleRead = document.createElement('button')

    
    removeButton.classList.add('remove-btn');
    card.classList.add("card");
    cardContent.classList.add("card-content")
    cardButtons.classList.add("card-buttons")
    
    title.textContent = book.title;
    author.textContent = book.author;
    pgnum.textContent = book.pages;
    removeButton.textContent = "x";
    if (book.read) {
        toggleRead.textContent = "Mark unread";
    } else {
        toggleRead.textContent = "Mark read";
    }

    cardContent.appendChild(title);
    cardContent.appendChild(author);
    cardContent.appendChild(pgnum);
    cardButtons.appendChild(removeButton);
    cardButtons.appendChild(toggleRead);

    
    card.appendChild(cardContent);
    card.appendChild(cardButtons);
    document.querySelector(".content").appendChild(card);

    removeButton.addEventListener('click', function() {
        document.querySelector(".content").removeChild(this.parentElement.parentElement)
    });

    toggleRead.addEventListener('click', function() {
        console.log(this.innerHTML);
        if (this.innerHTML == "Mark unread") {
            this.innerText = "Mark read"
        } else {
            this.innerHTML = "Mark unread"
        }
    })
};


function addBook (e) {
    e.preventDefault();
    const form = document.querySelector("#add-book-form");
    if (form.checkValidity()) {
        let formData = new FormData(form);
        let read = false
        if (formData.get("read") == "on") {
            read = true;
        }
        toggleModal();
        createCard(new Book(formData.get("title"), formData.get("author"), formData.get("pgnum"), read));
    } else {
        form.reportValidity();
    };

}

function populateTable(list) {
    bookList.forEach(book => createCard(book));
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const fellowship = new Book('Fellowship of the Ring', 'J.R.R Tolkien', 295, true);
const twin = new Book('The Twin Tower', 'J.R.R Tolkien', 295, false);
const returnOf = new Book('Return of the King', 'J.R.R Tolkien', 295, false);


populateTable(bookList);


document.querySelector('#add-btn').addEventListener('click', toggleModal);
document.querySelector('#close-btn').addEventListener('click', toggleModal);
document.querySelector("#submit").addEventListener('click', addBook)