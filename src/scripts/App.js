import LightBox from './LightBox';

const imgFolderPath = './assets/images/';
const imgNames = [
  'fox-01.jpg',
  'fox-02.jpg',
  'fox-03.jpg',
  'fox-04.jpg',
  'fox-05.jpg',
  'fox-06.jpg'
];
const imgPaths = imgNames.map(imgName => imgFolderPath + imgName);

class App {
  constructor() {
    this.lightBox = new LightBox(imgPaths);
    this.initPreviewBox();
  }
  initPreviewBox() {
    const boxArea = document.querySelector('.img-box-area');
    imgPaths.forEach((imgPath, idx) => {
      const imgBox = document.createElement('div');
      imgBox.className = 'img-box';
      imgBox.addEventListener('click', () => {
        this.lightBox.show(idx);
      });

      const innerImg = document.createElement('div');
      innerImg.style.backgroundImage = `url(${imgPath})`;

      imgBox.appendChild(innerImg);
      boxArea.appendChild(imgBox);
    });
  }
}

export default App;
