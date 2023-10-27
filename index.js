const myLibrary = []

function Book (title , author , pages){
    this.title = title
    this.author = author
    this.pages = pages
    
}

let inputTitle = document.getElementById('title')
let inputAuthor = document.getElementById('author')
let inputPages = document.getElementById('pages')

let inputChecked = document.getElementById('checked')


const addBookToLibrary = (myLibrary) => {
    let card = document.createElement('div')
    let title = document.createElement('h1')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    let toggle = document.createElement('button')
    let remove = document.createElement('button')
    
    
    
    card.classList.add('container')
    document.body.appendChild(card)
    card.appendChild(title)
    title.classList.add('title')
    card.appendChild(author)
    author.classList.add('title')
    card.appendChild(pages)
    pages.classList.add('title')
    toggle.classList.add('toggle')
    card.appendChild(toggle)
    remove.classList.add('toggle')
    remove.textContent = "Remove"
    card.appendChild(remove)
    
    title.textContent = inputTitle.value
    author.textContent = inputAuthor.value
    pages.textContent = inputPages.value
    
    const checkedStatus = () => {
        if(inputChecked.checked) {
            toggle.textContent = "Read"
        }else{
            toggle.textContent = "Not Read"
        }
    }
    checkedStatus();
    
    
    const toggleReadingStatus = () => {
        if(toggle.textContent.toLowerCase() === "read"){
            toggle.textContent = "Not Read"
        } else {
            toggle.textContent = "Read"
        }
        
    }
    toggle.addEventListener('click' , toggleReadingStatus);
    
    
    
    const removeCard = () => {
        card.remove()
    }
    
    remove.addEventListener('click' , removeCard)
    let newBook = new Book(inputTitle.value , inputAuthor.value , inputPages.value)
    myLibrary.push(newBook)
  
}

    let modal = document.querySelector(".modal");
    let button = document.querySelector(".button");
    let closeButton = document.querySelector(".close-button");
    let add = document.querySelector('.modal__button')
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    
    add.addEventListener('click' , function(event){
        if(!(inputTitle.value === '' || inputAuthor.value === '' || inputPages.value === '')){
            addBookToLibrary();
        }
    })
    
     add.addEventListener('click' , function(event){
         event.preventDefault()
         if(!(inputTitle.value === '' || inputAuthor.value === '' || inputPages.value === '')){
               toggleModal();
        } else{
            document.querySelector('form').reportValidity()
        }
    })
    
    
        const formReset = () => {
            inputTitle.value = ''
            inputAuthor.value = ''
            inputPages.value = ''
            inputChecked.checked = false;
        }


    button.addEventListener('click' , formReset)  
    button.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);


