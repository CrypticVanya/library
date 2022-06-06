
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return `${title} by ${author}, ${pages},` 
    }
}



function Library() {
    this.book = []

    this.addBook = function(book) {
    this.book.push(book)
    }
}


const userEntry = new Book('lol', 'lol', 'lol')

const library = new Library() 

library.addBook(userEntry)



function displayOnScreen() {
    for(let i = 0; 1 < library.book.length; i++) {
        const carousel = document.querySelector('.carousel-container')
        const title = document.createElement('h1')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        let book_title = library.book[i].title
        let book_author = library.book[i].author
        let book_pages = library.book[i].pages
        title.textContent = book_title
        author.textContent = book_author
        pages.textContent = book_pages
        carousel.appendChild(title)
        carousel.appendChild(author)
        carousel.appendChild(pages)
}
}



//Code to make an invisible form pop up and ask for the info

function openForm() {
    document.getElementById('popUpForm').style.display = 'block'
}

function closeForm() {
    document.getElementById('popUpForm').style.display = 'none'
}


const btn = document.querySelector('.openButton')
btn.addEventListener('click', () => {
    openForm()
})

const cancelBtn = document.querySelector('.btn-cancel')
cancelBtn.addEventListener('click', () => {
    closeForm()
})

const sendBtn = document.querySelector('.lol')
sendBtn.addEventListener('click', function getTarget(e) {
    e.preventDefault()
    const userTitle = document.getElementById('title').value
    const userAuthor = document.getElementById('author').value
    const userPages = document.getElementById('pages').value
    const newBookEntry = new Book(userTitle, userAuthor, userPages)
    library.addBook(newBookEntry)
    displayOnScreen()
})



