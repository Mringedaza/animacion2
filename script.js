const darkModeToggle = document.getElementById('dark_mode');
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });