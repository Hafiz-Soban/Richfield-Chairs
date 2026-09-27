
function toggleNavbar() {
    const navbar = document.getElementById('Navbar'); 
    navbar.classList.toggle('active');
}


document.querySelectorAll('.navbar > li').forEach(item => {
    ['mouseenter', 'mouseleave'].forEach(evt => 
        item.addEventListener(evt, () => {
            clearTimeout(item.hoverTimeout);
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                const show = evt === 'mouseenter';
                dropdown.style.cssText = show ? 'display: flex; opacity: 1; transform: translateY(0);' : 'opacity: 0; transform: translateY(10px);';
                if (!show) item.hoverTimeout = setTimeout(() => dropdown.style.display = 'none', 400);
            }
        })
    );
});




function sendMessage() {
    alert("✨ Thank you! Your message has been sent successfully! 📬 We'll get back to you shortly. 😊");
}


