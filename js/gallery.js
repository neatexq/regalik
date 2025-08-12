document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    // Массив с артом
    const images = [
        "images/art1.jpg",
        "images/art2.jpg",
        // Просто добавляй новые строки сюда
    ];

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Арт";
        img.loading = "lazy"; // Ленивая загрузка
        gallery.appendChild(img);
    });
});
