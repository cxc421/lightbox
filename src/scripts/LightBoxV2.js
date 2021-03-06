function deBounce(fn, delay) {
  let key = null;
  return function(...args) {
    clearTimeout(key);
    key = setTimeout(fn, delay, ...args);
  };
}

class LightBoxV2 {
  constructor(imgPaths) {
    const container = document.querySelector('.lightbox-v2');
    const imageArea = container.querySelector('.lightbox-v2-image-area');
    const imageWrapper = imageArea.querySelector('.lightbox-v2-image-wrapper');
    const loadingIcon = imageWrapper.querySelector('.lightbox-v2-loading-icon');
    const image = imageWrapper.querySelector('img');
    const leftIcon = imageWrapper.querySelector('.left-icon');
    const rightIcon = imageWrapper.querySelector('.right-icon');
    const cancelIcon = imageWrapper.querySelector('.cancel-icon');
    const textPageArea = container.querySelector('.lightbox-v2-text-page');
    const textQuoteArea = container.querySelector('.lightbox-v2-text-quote');
    const [curPage, totalPage] = textPageArea.querySelectorAll('span');

    this.elms = {
      container,
      loadingIcon,
      imageArea,
      imageWrapper,
      image,
      leftIcon,
      rightIcon,
      cancelIcon,
      curPage,
      totalPage
    };
    this.boxIdx = -1;
    this.imgPaths = imgPaths;

    leftIcon.addEventListener('click', this.toPrevBox.bind(this));
    rightIcon.addEventListener('click', this.toNextBox.bind(this));
    cancelIcon.addEventListener('click', this.hide.bind(this));
    window.addEventListener(
      'resize',
      deBounce(this.adjustImageSize.bind(this), 50)
    );

    const stopPropagation = e => e.stopPropagation();
    imageWrapper.addEventListener('click', stopPropagation);
    textPageArea.addEventListener('click', stopPropagation);
    textQuoteArea.addEventListener('click', stopPropagation);
    container.addEventListener('click', this.hide.bind(this));

    this.preloadImags();
  }
  preloadImags(idx) {
    idx = idx || 0;
    if (this.imgPaths && this.imgPaths.length > idx) {
      const img = new Image();
      img.onload = () => {
        console.log('Image -' + idx + ', complete!');
        this.preloadImags(idx + 1);
      };
      console.log('Try to preload:' + this.imgPaths[idx]);
      img.src = this.imgPaths[idx];
    }
  }
  toNextBox() {
    const boxIdx = this.boxIdx < this.imgPaths.length - 1 ? this.boxIdx + 1 : 0;

    this.changeBox(boxIdx);
  }
  toPrevBox() {
    const boxIdx = this.boxIdx > 0 ? this.boxIdx - 1 : this.imgPaths.length - 1;

    this.changeBox(boxIdx);
  }
  toggleDisplayElems(hideProperties = [], showProperties = []) {
    hideProperties.forEach(property => {
      const elm = this.elms[property];
      elm.classList.remove('lightbox-icons-show');
      elm.classList.add('lightbox-icons-hide');
    });

    showProperties.forEach(property => {
      const elm = this.elms[property];
      elm.classList.remove('lightbox-icons-hide');
      elm.classList.add('lightbox-icons-show');
    });
  }
  toLoadingStatus(dontShowLoadingIcon) {
    const hideProperties = ['image', 'leftIcon', 'rightIcon', 'cancelIcon'];
    const showProperties = dontShowLoadingIcon ? [] : ['loadingIcon'];
    this.toggleDisplayElems(hideProperties, showProperties);
  }
  toShowImageStatus() {
    const showProperties = ['image', 'leftIcon', 'rightIcon', 'cancelIcon'];
    const hideProperties = ['loadingIcon'];
    this.toggleDisplayElems(hideProperties, showProperties);
  }
  adjustImageSize() {
    const { image, imageWrapper, imageArea } = this.elms;
    const { clientHeight: maxHeight, clientWidth: maxWidth } = imageArea;
    const { naturalHeight, naturalWidth } = image;
    let width, height;

    if (!naturalHeight || !naturalWidth) {
      // console.log('no image, neglect');
      return;
    }

    if (naturalHeight < maxHeight && naturalWidth < maxWidth) {
      width = naturalWidth;
      height = naturalHeight;
    } else {
      const naturalRatio = naturalWidth / naturalHeight;
      const maxRatio = maxWidth / maxHeight;
      if (maxRatio > naturalRatio) {
        height = maxHeight;
        width = maxHeight * naturalRatio;
      } else {
        width = maxWidth;
        height = maxWidth / naturalRatio;
      }
    }

    const borderStyle = getComputedStyle(imageWrapper).borderWidth;
    const borderWidth = borderStyle ? borderStyle.split('px')[0] : 0;
    // set image size
    image.style.width = width - borderWidth * 2 + 'px';
    imageWrapper.style.width = width + 'px';
    imageWrapper.style.height = height + 'px';
  }
  changeBox(boxIdx) {
    if (boxIdx === this.boxIdx) return;

    const { image, totalPage, curPage } = this.elms;

    // 先顯示空白
    this.toLoadingStatus(true);
    // 超過 100ms 再顯示 loading icon
    const key = setTimeout(() => this.toLoadingStatus(false));

    image.onload = () => {
      const delay = 200;

      this.adjustImageSize();
      clearTimeout(key);
      setTimeout(() => {
        this.toShowImageStatus();
      }, delay);
    };
    image.onerror = () => {
      console.error('load image failed');
      clearTimeout(key);
    };
    image.src = this.imgPaths[boxIdx];

    // update boxId
    this.boxIdx = boxIdx;
    // update texts
    curPage.textContent = boxIdx + 1;
    totalPage.textContent = '/' + this.imgPaths.length;
  }
  show(boxIdx) {
    this.changeBox(boxIdx);
    // this.elms.container.style.display = 'block';
    this.elms.container.classList.add('lightbox-show');
  }
  hide() {
    // this.elms.container.style.display = 'none';
    this.toLoadingStatus(true);
    this.boxIdx = -1;
    this.elms.container.classList.remove('lightbox-show');
  }
}

export default LightBoxV2;
