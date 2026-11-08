// Widget Jam Realtime
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    if (clockElement && dateElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('id-ID', options);
    }
}

setInterval(updateClock, 1000);
updateClock();

// Handler Form Registrasi
function handleRegistration(e) {
    e.preventDefault();
    alert('Pendaftaran Berhasil Disimpan!');
    e.target.reset();
}

// Handler Form Kontak
function handleContact(e) {
    e.preventDefault();
    alert('Pesan Anda Berhasil Terkirim!');
    e.target.reset();
}

// Handler Read More Artikel
function readArticle(title, content) {
    alert(`Membaca Artikel: ${title}\n\n${content}`);
}