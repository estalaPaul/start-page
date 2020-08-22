window.onload = function () {
    const Http = new XMLHttpRequest();
    Http.open('GET', 'http://quotes.rest/qod.json?category=inspire');
    Http.send();

    Http.onreadystatechange = function() {
        const div = document.getElementById('quote-wrapper')
        div.innerText = "";
        if (this.readyState == 4 && this.status == 200) {
            try {
                let quote = JSON.parse(Http.responseText);
                quote = quote.contents.quotes[0];

                const quoteParagraph = document.createElement('p');
                quoteParagraph.classList.add('quote')
                const authorParagraph = document.createElement('p');
                authorParagraph.classList.add('author')

                quoteParagraph.innerText = quote.quote || 'No quote today. :(';
                div.appendChild(quoteParagraph);

                if (quote.author) {
                    authorParagraph.innerText = `- ${quote.author}`;
                    div.appendChild(authorParagraph);
                }
            } catch (e) {
                console.log(e);
                showQuoteError(div);
            }
        } else {
            showQuoteError(div);
        }
    }
};

function showQuoteError(wrapper) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Looks like something\'s wrong with the quote provider I\'m using. :(';
    wrapper.appendChild(paragraph);
}

document.addEventListener('keydown', function (e) {
    const searchInput = document.getElementById('search-input')
    if (document.activeElement !== searchInput) {
        const searchForm = document.getElementById('search-form');
        if (e.key == 'g') {
            searchForm.action = 'https://www.google.com/search';
            searchInput.style.borderColor = '#3d7ff0';
        } else if (e.key == 'd') {
            searchForm.action = 'https://www.duckduckgo.com/';
            searchInput.style.borderColor = '#d75534';
        }
    }
});
