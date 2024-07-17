document.addEventListener("DOMContentLoaded", function() {
    // Countdown timer
    const countdownTimer = document.getElementById('countdown-timer');
    const eventDate = new Date('2024-07-17T21:30:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownTimer.innerHTML = "Event Started";
        }
    };
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach(benefit => {
        benefit.addEventListener('mouseenter', () => {
            benefit.style.backgroundColor = '#b3d4ff';
            benefit.style.borderColor = '#99c2ff';
        });

        benefit.addEventListener('mouseleave', () => {
            benefit.style.backgroundColor = '#e6f7ff';
            benefit.style.borderColor = '#cce7ff';
        });
    });

    const countdownInterval = setInterval(updateCountdown, 1000);
});
