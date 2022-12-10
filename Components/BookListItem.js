const BookListItem = (book) => {
  let html = `<li
                class="book-list__item mb-2 mx-2 last:mb-0 
                p-3 text-black last:border-b-0 border-b 
                border-black-700 cursor-pointer" id="${book.id}">
              ${book.author} - ${book.title}  - ${book.id}   
              </li>`;
  return html;
};