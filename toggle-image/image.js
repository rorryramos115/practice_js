
  const gallery = document.getElementById("gallery");

  // 1. Main Image (Parent)
  const mainImage = document.createElement("img");
  mainImage.src = "https://via.placeholder.com/300x200?text=Main+Image";
  mainImage.className = "w-[300px] h-[200px] rounded-lg shadow-lg";
  gallery.appendChild(mainImage);

  // 2. Thumbnails Container
  const thumbContainer = document.createElement("div");
  thumbContainer.className = "flex space-x-4";

  // 3. Thumbnail URLs
  const thumbnails = [
    "public/img1.webp",
    "public/img2.jpeg",
  ];

  thumbnails.map((src) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "w-[100px] h-[70px] rounded cursor-pointer hover:scale-105 transition";

    // When thumbnail clicked, set it as main image
    thumb.addEventListener("click", () => {
      mainImage.src = src.replace("100x70", "300x200").replace("Image", "Main");
    });

    thumbContainer.appendChild(thumb);
  });

  gallery.appendChild(thumbContainer);

