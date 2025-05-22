const image = document.getElementById("hoverImage");
    const text = document.getElementById("textBehind");
    const container = document.getElementById("imageContainer");

    // При наведении — делаем картинку прозрачной и показываем текст
    container.addEventListener("mouseenter", () => {
      image.style.opacity = "0.4";
      text.style.opacity = "1";
    });

    // При выходе курсора — всё возвращается
    container.addEventListener("mouseleave", () => {
      image.style.opacity = "1";
      text.style.opacity = "0";
    });