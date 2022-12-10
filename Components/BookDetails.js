const BookDetails = (book) => {
    let html = `
    <div id="bookDetails" 
    class="bookInformation bg-[#3B185F] text-gray-200 rounded-md border-2
    border-[#5C2E7E]
    absolute inset-x-1 w-60 top-10 mx-5">
        <img src="${book.coverImage}">
            <ul class="list">
                <li>Author: ${book.author}</li>
                <li>Title: ${book.title}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div>
    `;

    return html;
};