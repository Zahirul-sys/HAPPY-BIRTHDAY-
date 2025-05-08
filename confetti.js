// simple confetti animation from https://github.com/mathusummut/confetti.js
(function() {
  var confetti = document.getElementById('confetti');
  var ctx = confetti.getContext('2d');
  var pieces = [], numberOfPieces = 100;

  for (var i = 0; i < numberOfPieces; i++) {
    pieces.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
                  radius: Math.random() * 6 + 4, color: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  speed: Math.random() * 3 + 1 });
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < pieces.length; i++) {
      var p = pieces[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.speed;
      if (p.y > window.innerHeight) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
