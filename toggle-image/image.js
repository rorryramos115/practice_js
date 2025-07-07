const smallImageData = [
  {
    src: 'public/img2.jpeg',
    name: 'Rorry Ramos',
    course: 'BSIT',
  },
  {
    src: 'public/img1.webp',
    name: 'Bantam Palomeras',
    course: 'BSIT',
  },
];

const Container = document.getElementById('container');
const ImageContainer = document.createElement('div');
const MainImage = document.createElement('img');
const details = document.createElement('div');
const smallImgContainer = document.createElement('div');


ImageContainer.className = 'flex flex-col p-8 rounded-lg shadow-md mb-10';
MainImage.src = smallImageData[0].src;
MainImage.className = 'w-30 rounded-lg mb-10';

details.className = 'flex flex-col text-lg font-bold mb-10';
details.innerHTML = `
  <h1>Name: ${smallImageData[0].name}</h1>
  <h1>Course: ${smallImageData[0].course}</h1>
`;

ImageContainer.appendChild(MainImage);
ImageContainer.appendChild(details);

smallImgContainer.className = 'flex items-center justify-center gap-5';

smallImageData.map((data) => {
  const smallImg = document.createElement('img');
  smallImg.src = data.src;
  smallImg.className = 'w-20 rounded-lg cursor-pointer';

  smallImg.addEventListener('click', () => {
    MainImage.src = data.src;
    details.innerHTML = `
      <h1>Name: ${data.name}</h1>
      <h1>Course: ${data.course}</h1>
    `;
  });

  smallImgContainer.appendChild(smallImg);
});

ImageContainer.appendChild(smallImgContainer);
Container.appendChild(ImageContainer);

