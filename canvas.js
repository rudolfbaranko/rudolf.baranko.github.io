const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const bmwLogo = new Image();
    bmwLogo.src = 'img/logo-bmw.png'; 

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = -2;
    const logoWidth = 50;  
    const logoHeight = 50; 

    bmwLogo.onload = function() {
        update();
    };

    function drawLogo() {
        ctx.drawImage(bmwLogo, x, y, logoWidth, logoHeight);
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLogo();
        x += dx;
        y += dy;

        if (x + dx > canvas.width - logoWidth || x + dx < 0) {
            dx = -dx;
        }
        if (y + dy > canvas.height - logoHeight || y + dy < 0) {
            dy = -dy;
        }

        requestAnimationFrame(update);
    }

    canvas.addEventListener('click', function() {
        dx = -dx;
        dy = -dy;
    });