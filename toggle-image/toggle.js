const ContainerDiv = document.getElementById('container');

const mainImage = document.createElement('img');
mainImage.src = 'public/img1.webp';
mainImage.className = 'w-30 h-30 rounded-lg';

ContainerDiv.appendChild(mainImage);

  const thumbContainer = document.createElement("div");
  thumbContainer.className = "flex space-x-4";

const ImgData = [
    'public/img1.webp',
    'public/img2.jpeg',
];

ImgData.map((src) => {
    const smallImg = document.createElement('img');
    smallImg.src = src;
    smallImg.className = 'w-20 h-20 rounded-lg';

    smallImg.addEventListener('click', () => {
        mainImage.src = src;
    });

    thumbContainer.appendChild(smallImg)
})

ContainerDiv.appendChild(thumbContainer);