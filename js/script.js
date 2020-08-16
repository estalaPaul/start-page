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
