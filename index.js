
// pop up the form menu

const addBookButton = document.querySelector('.newBookButton')
let form = document.querySelector('.book-form')
addBookButton.addEventListener('click', popUp)

function popUp() {
    form.style.display = 'block'
    titleNode.value = ''
    authorNode.value = ''
    pagesNode.value = ''
}

//close button on form
const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', closeForm)

function closeForm(e) {
    form.style.display = 'none'
    if(e.target.id !== 'addBookButton') {
        titleNode.value = ''
        authorNode.value = ''
        pagesNode.value = ''
    }
}

//creating book cards

let bookCards = document.getElementById('book-card-container')
const titleNode = document.getElementById('title')
const authorNode = document.getElementById('author')
const pagesNode = document.getElementById('pages')
const haveReadNode = document.getElementById('read')


const addBook = document.getElementById('addBookButton')
addBook.addEventListener('click', closeForm)
addBook.addEventListener('click', createBookCard)

function createBookCard() {
    let card = document.createElement('div')
    card.classList.add('card')
    bookCards.appendChild(card)

    let titleValue = titleNode.value
    let authorTitle = authorNode.value
    let pagesTitle = pagesNode.value 
    let readTitle = haveReadNode.value

    let newBook = new Book(titleValue,authorTitle,pagesTitle,readTitle)

    let cardTitle = document.createElement('p')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = newBook.title

    let authorValue = document.createElement('p')
    authorValue.textContent = newBook.author

    let pagesValue = document.createElement('p')
    pagesValue.textContent = newBook.pages

    let haveReadLabel = document.createElement('label')


    let readValue = document.createElement('input')
    readValue.setAttribute('type','checkbox')

    card.appendChild(cardTitle)
    card.appendChild(authorValue)
    card.appendChild(pagesValue)
    card.appendChild(readValue)
}

function Book(title,author,pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}
