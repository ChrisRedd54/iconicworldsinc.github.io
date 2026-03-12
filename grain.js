// Film grain overlay
(function() {
  const canvas = document.getElementById('grain');
  const ctx = canvas.getContext('2d');

  let w, h, frame;

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function drawGrain() {
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      data[i]     = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    frame = requestAnimationFrame(drawGrain);
  }

  window.addEventListener('resize', resize);
  resize();
  drawGrain();
})();
