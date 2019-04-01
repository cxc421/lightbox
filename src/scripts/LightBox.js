function deBounce(fn, delay) {
  let key = null;
  return function(...args) {
    clearTimeout(key);
    key = setTimeout(fn, delay, ...args);
  };
}

class LightBox {
  constructor(imgPaths) {
    const lightBoxWrapper = document.querySelector('.lightbox-wrapper');
    const lightboxPages = lightBoxWrapper.querySelectorAll('.lightbox-page');
    const sliderArea = lightBoxWrapper.querySelector('.lightbox-slider-area');
    const leftIcon = sliderArea.querySelector('.left-icon');
    const rightIcon = sliderArea.querySelector('.right-icon');
    const cancelIcon = sliderArea.querySelector('.cancel-icon');

    this.selectIdx = 0;
    this.imgPaths = imgPaths;
    this.lightBoxWrapper = lightBoxWrapper;
    this.lightboxPages = lightboxPages;
    this.initSlider(sliderArea);

    leftIcon.addEventListener('click', this.toPrevSlider.bind(this));
    rightIcon.addEventListener('click', this.toNextSlider.bind(this));
    cancelIcon.addEventListener('click', this.hide.bind(this));
    window.addEventListener(
      'resize',
      deBounce(this.adjustSliderSize.bind(this), 50)
    );
    lightBoxWrapper.addEventListener('click', e => {
      if (e.target === lightBoxWrapper) {
        this.hide();
      }
    });
  }
  initSlider(sliderArea) {
    this.imgPaths.forEach((imgPath, idx) => {
      const img = document.createElement('img');
      img.className = 'lightbox-img';
      img.id = 'lightbox-img-' + idx;
      img.src = imgPath;
      sliderArea.prepend(img);
    });
  }
  toPrevSlider() {
    const newSelectIdx =
      this.selectIdx > 0 ? this.selectIdx - 1 : this.imgPaths.length - 1;
    this.changeSlider(newSelectIdx);
  }
  toNextSlider() {
    const newSelectIdx =
      this.selectIdx < this.imgPaths.length - 1 ? this.selectIdx + 1 : 0;
    this.changeSlider(newSelectIdx);
  }
  changeSlider(newSelectIdx) {
    const oldSlider = this.lightBoxWrapper.querySelector(
      '#lightbox-img-' + this.selectIdx
    );
    const newSlider = this.lightBoxWrapper.querySelector(
      '#lightbox-img-' + newSelectIdx
    );

    if (!newSlider) {
      throw new Error('changeSlider with unknown idx = ' + newSelectIdx);
    }

    oldSlider.style.display = 'none';
    newSlider.style.display = 'block';
    this.lightboxPages.forEach(dom => (dom.textContent = newSelectIdx + 1));

    this.selectIdx = newSelectIdx;
    this.adjustSliderSize(newSlider);
  }
  adjustSliderSize() {
    // console.log({ idx: this.selectIdx });
    const newSlider = this.lightBoxWrapper.querySelector(
      '#lightbox-img-' + this.selectIdx
    );
    const maxMobileScreenSize = 1024;
    const { naturalWidth, naturalHeight } = newSlider;
    let { clientHeight, clientWidth } = document.body;

    if (
      clientWidth < maxMobileScreenSize &&
      clientWidth / clientHeight > naturalWidth / naturalHeight
    ) {
      document.body.classList.add('mobile-horizontal');
      // console.log('mobile-horizontal');
    } else {
      document.body.classList.remove('mobile-horizontal');
      // console.log('mobile-vertial');
    }
  }
  show(newSelectIdx) {
    this.changeSlider(newSelectIdx);
    this.lightBoxWrapper.style.display = 'block';
  }
  hide() {
    this.lightBoxWrapper.style.display = 'none';
  }
}

export default LightBox;
