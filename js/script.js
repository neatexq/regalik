document.addEventListener("DOMContentLoaded", () => {
    fetch("gallery.json")
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById("gallery");
            images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.loading = "lazy";
                gallery.appendChild(img);
            });
        })
        .catch(err => console.error("Ошибка загрузки галереи:", err));
});
