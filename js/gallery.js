document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    // Здесь перечисляем картинки
    const images = [
        // Просто добавляй сюда новые файлы: "images/название.jpg",
        "images/sample1.jpg",
        "images/sample2.jpg"
    ];

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
});
