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

// Toggle dark mode functionality
const modeToggleButton = document.getElementById('mode-toggle');
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
