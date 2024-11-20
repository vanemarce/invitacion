// Temporizador de cuenta regresiva
const countdownDate = new Date("Jan 11, 2025 15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "¡Ya es el día!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Mostrar/Cerrar modal de donaciones
function mostrarDonaciones() {
    document.getElementById("modalDonaciones").style.display = "flex";
}

function cerrarDonaciones() {
    document.getElementById("modalDonaciones").style.display = "none";
}

// Confirmación de asistencia en WhatsApp
function confirmarAsistencia() {
    const mensaje = ` 
    Tu presencia es un regalo invaluable para nosotros en este día tan especial.
    Te pedimos que nos confirmes tu asistencia antes del [10 de diciembre del 2024], para compartir juntos esta celebración única.
    ¡Estamos ansiosos por compartir este día inolvidable contigo!
    `;
    window.location.href = `https://wa.me/+595992452041?text=${encodeURIComponent(mensaje)}`;
}
