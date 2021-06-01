(function () {
  const hand = document.getElementById('hand');
  const title = document.querySelector('title');
  const icon = document.querySelector('link[rel="icon"]');

  const favicons = {
    fist: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23fdfdfd%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2270%22>✊</text></svg>`,
    fingers: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23fdfdfd%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2270%22>✌</text></svg>`,
  };

  const setFist = () => {
    title.innerText = 'Hello';
    icon.href = favicons.fist;
    hand.innerText = '✊';
    hand.style.setProperty('opacity', '1');
  };

  const setFingers = () => {
    title.innerText = 'Goodbye';
    icon.href = favicons.fingers;
    hand.innerText = '✌';
    hand.style.setProperty('opacity', '0');
  };

  icon.href = favicons.fist;
  hand.onclick = () => (hand.innerText === '✊' ? setFingers() : setFist());
})();
