

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
        const bookInv = document.querySelector('.bookInv')
        const card = document.createElement('div')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const btn = document.createElement('button')
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        btn.textContent = 'Delete'
        bookInv.appendChild(card)
        card.setAttribute('id', 'card')
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(btn)
        btn.setAttribute('class', 'deleteButton')


        const cancelBtn = document.querySelector('.deleteButton')
        cancelBtn.addEventListener('click', () => {
        card.remove()
        })
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


//factory function to make an invisible form pop up and ask for the info

const Formatter = (function() {

    const writeToDom = (selector, message) => {
        document.getElementById(selector).style.display = message
    }

    const btn = document.querySelector('.openButton')
    btn.addEventListener('click', () => {
        Formatter.writeToDom('popUpForm', 'block')
    })

    const cancelBtn = document.querySelector('.btn-cancel')
    cancelBtn.addEventListener('click', () => {
    Formatter.writeToDom('popUpForm', 'none')
    })

    return {
        writeToDom,
    }

})();

