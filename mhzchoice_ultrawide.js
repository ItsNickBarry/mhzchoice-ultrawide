var video, controlBar, fullscreenButton, resolutionsButton;
var ultrawideButton;

var findElements = function () {
  video = document.querySelector('#video_html5_api');
  controlBar = document.querySelectorAll('.vjs-control-bar')[2];

  if (controlBar) {
    fullscreenButton = controlBar.querySelector('.vjs-fullscreen-control');
    resolutionsButton = controlBar.querySelector('.vjs-resolutions-button');
  }

  return !!(video && controlBar && fullscreenButton && resolutionsButton);
};

var toggleUltrawide = function () {
  video.classList.toggle('ultrawide');
  ultrawideButton.classList.toggle('pushed');
};

var run = function () {
  if (findElements()) {
    ultrawideButton = document.createElement('div');

    ultrawideButton.classList.add('vjs-control');
    ultrawideButton.classList.add('vjs-button');
    ultrawideButton.classList.add('ultrawide');

    ultrawideButton.title = 'Ultrawide';

    ultrawideButton.addEventListener('click', toggleUltrawide);

    controlBar.appendChild(fullscreenButton);
    controlBar.appendChild(ultrawideButton);
    controlBar.appendChild(resolutionsButton);
  } else {
    setTimeout(run, 100);
  }
};

run();
