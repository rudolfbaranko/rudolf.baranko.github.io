function updateDateTime() {
    const element = document.getElementById('datetime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    element.textContent = now.toLocaleDateString('pl-PL', options);
}

document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000); 
});