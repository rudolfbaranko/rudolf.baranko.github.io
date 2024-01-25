document.addEventListener('DOMContentLoaded', function() {
        const numberOfLogos = 5; 

        for (let i = 0; i < numberOfLogos; i++) {
            const logo = document.createElement('img');
            logo.src = 'img/logo-bmw.png'; 
            logo.classList.add('bmw-logo');
            document.body.appendChild(logo);

            const x = Math.random() * (window.innerWidth - logo.clientWidth);
            const y = Math.random() * (window.innerHeight - logo.clientHeight);
            logo.style.left = `${x}px`;
            logo.style.top = `${y}px`;
        }
    });