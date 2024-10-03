function filterAudio() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const audioItems = document.querySelectorAll('.audio-item');

    audioItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = ''; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Toggle navbar visibility
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
