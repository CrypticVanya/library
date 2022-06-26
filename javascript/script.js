

const book = (title, author, pages) => {
    const info = () => console.log(`${title} by ${author}, ${pages},`);
    return {title, author, pages}
}





function Library() {
    this.book = []

    this.addBook = function(book) {
        this.book.push(book)
    }
}

const library = new Library()


function displayOnScreen(book) {
        const carousel = document.querySelector('.carousel-container')
        const title = document.createElement('div')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        carousel.appendChild(title)
        carousel.appendChild(author)
        carousel.appendChild(pages)
}



const sendBtn = document.querySelector('.lol')
sendBtn.addEventListener('click', function getTarget(e) {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    userEntryBook = book(title,author,pages)
    library.addBook(userEntryBook)
    displayOnScreen(userEntryBook)
})






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

