



const book = (title, author, pages, status) => {
    const info = () => console.log(`${title} by ${author}, ${pages}, ${status}`);
    return {title, author, pages, status}
}


function Library() {
    this.book = []

    this.addBook = function(book) {
        this.book.push(book)
    }

    this.getBook = function(title) {
        return this.book.find((book) => book.title === title)
    }
}



const library = new Library()



function displayOnScreen(book) {
        const bookInv = document.querySelector('.bookInv')
        const card = document.createElement('div')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const readBtn = document.createElement('button')
        readBtn.classList.add('read-btn')
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        readBtn.textContent = book.status
        readBtn.onclick = toggleRead

        bookInv.appendChild(card)
        card.setAttribute('id', 'card')
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readBtn)
    
}

const toggleRead = (e) => {
    if (e.currentTarget.textContent == 'Pending') e.currentTarget.textContent = 'Read'
    else e.currentTarget.textContent = 'Pending'
}

const sendBtn = document.querySelector('.lol')
sendBtn.addEventListener('click', function getTarget(e) {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const status = document.getElementById('status').value
    userEntryBook = book(title,author,pages, status)
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

