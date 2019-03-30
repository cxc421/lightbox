const boxArea = document.querySelector('.img-box-area');
const sliderArea = document.querySelector('.lightbox-slider-area');
const images = [
  'fox-01.jpg',
  'fox-02.jpg',
  'fox-03.jpg',
  'fox-04.jpg',
  'fox-05.jpg',
  'fox-06.jpg'
];

// init main pages
for (let i = 0; i < images.length; i++) {
  const imgBox = document.createElement('div');
  imgBox.className = 'img-box';
  imgBox.style.backgroundImage = `url(${'./assets/images/' + images[i]})`;
  imgBox.addEventListener('click', function() {
    showBox(i);
  });
  boxArea.appendChild(imgBox);
}

// init main pages
// const slider = document.querySelector('.slider');
// for (let i = 0; i < images.length; i++) {
//   const img = document.createElement('img');
//   img.src = './assets/images/' + images[i];
//   slider.appendChild(img);
// }

//
let selectIdx = 3;
const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const app = document.querySelector('.app');
const lightboxWrapper = document.querySelector('.lightbox-wrapper');
const SHOWBOX_CLASS = 'show-lightbox';

function showBox(boxIdx) {
  selectIdx = boxIdx;
  update();
  app.classList.add(SHOWBOX_CLASS);
  lightboxWrapper.style.display = 'block';
  console.log('haha');
}

cancelIcon.addEventListener('click', function() {
  app.classList.remove(SHOWBOX_CLASS);
  lightboxWrapper.style.display = 'none';
});

rightIcon.addEventListener('click', function() {
  if (selectIdx < images.length - 1) {
    selectIdx++;
  } else {
    selectIdx = 0;
  }
  update();
});
leftIcon.addEventListener('click', function() {
  if (selectIdx > 0) {
    selectIdx--;
  } else {
    selectIdx = 5;
  }

  update();
});

const lightboxPages = document.querySelectorAll('.lightbox-page');
const hideImg = document.querySelector('.hide-img');

function update() {
  hideImg.src = './assets/images/' + images[selectIdx];
  lightboxPages.forEach(dom => (dom.textContent = selectIdx + 1));
  // lightboxPage.textContent = selectIdx + 1;

  hideImg.onload = () => {
    // console.log(hideImg.naturalHeight);
    console.log('onload');
    resize();
  };
  // document.querySelector('.hide-img').onload = function() {
  //   const imgDOMs = slider.querySelectorAll('img');
  //   let left = 0;
  //   for (let i = 0; i < selectIdx; i++) {
  //     left += imgDOMs[i].clientWidth;
  //   }
  //   slider.style.left = -1 * left + 'px';
  // };
}

// update();
window.onresize = resize();
window.addEventListener('orientationchange', function() {
  setTimeout(resize, 100);
});

let defaultOrientation = null;
function resize() {
  if (!hideImg.naturalWidth) {
    return;
  }

  const { naturalWidth, naturalHeight } = hideImg;
  let { clientHeight, clientWidth } = document.body;

  console.log({
    naturalWidth,
    naturalHeight,
    clientWidth,
    clientHeight
  });

  if (
    clientWidth < 1024 &&
    clientWidth / clientHeight > naturalWidth / naturalHeight
  ) {
    document.body.classList.add('mobile-horizontal');
    console.log('add');
  } else {
    document.body.classList.remove('mobile-horizontal');
    console.log('remove');
  }
}
