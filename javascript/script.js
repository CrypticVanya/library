    let myLibrary = []
    


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}` 
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')


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


/*

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("book-carousel-item")
    if (n > slides.length) {
        slideIndex = 1
    } if (n < 1) {
        slideIndex = slides.length
    } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex-1].style.display = 'block'
}

*/




