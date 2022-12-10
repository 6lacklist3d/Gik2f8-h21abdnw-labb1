"use strict";

let bookList = [];
window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(bookList));

    const elements = document.querySelectorAll('.book-list__item');


    for(let i = 0; i < elements.length; i++){
  
      elements[i].addEventListener('mouseover', (e) => {
        let theBook = getDetails(e.target.id)
        theBook.then(function (result){
          renderBookItem(result);
        })
      });
  
      elements[i].addEventListener('mouseout', () => {
        const popup = document.getElementById('bookDetails');
        popup.remove();
      });
    }
  }
  
  function renderBookItem(book){
  
    const elements = document.getElementById('bookDetails');
  
    elements && popup.remove();
    let myhtml = BookDetails(book);
    root.insertAdjacentHTML('afterbegin', myhtml);
    
  
  }