import LightBox from './LightBox';

const imgFolderPath = './assets/images/';
const imgNames = [
  'fox-02.jpg',
  'fox-04.jpg',
  'fox-01.jpg',
  'fox-06.jpg',
  'fox-05.jpg',
  'fox-03.jpg'
];
const imgSmallPaths = imgNames.map(
  imgName => imgFolderPath + imgName.split('.').join('-s.')
);
const imgBigPaths = imgNames.map(imgName => imgFolderPath + imgName);
console.log(imgSmallPaths);

class App {
  constructor() {
    this.initPreviewBox();
    console.log('A');
    this.lightBox = new LightBox(imgBigPaths);
    console.log('B');
  }
  initPreviewBox() {
    const boxArea = document.querySelector('.img-box-area');
    imgSmallPaths.forEach((imgPath, idx) => {
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
