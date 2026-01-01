(function(){
  const confettiArea = document.querySelector('.confetti-area');
  const downloadBtn = document.getElementById('download');
  let intervalId = null;

  function rand(min,max){return Math.random()*(max-min)+min}

  function createPiece(){
    const el = document.createElement('div');
    el.className = 'confetti';
    const colors = ['#ffd166','#06d6a0','#118ab2','#ef476f','#f4a261'];
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    const size = Math.floor(rand(6,14));
    el.style.width = size + 'px';
    el.style.height = Math.floor(size*1.2) + 'px';
    const left = rand(0,100);
    el.style.left = left + '%';
    const delay = rand(0,2);
    const duration = rand(2.6,5.2);
    el.style.animationDuration = duration + 's';
    el.style.top = '-' + Math.floor(rand(5,20)) + 'vh';
    el.style.opacity = rand(0.75,1);
    el.style.transform = 'rotate(' + Math.floor(rand(0,360)) + 'deg)';

    confettiArea.appendChild(el);

    // remove after animation
    setTimeout(()=>{
      el.remove();
    }, (duration+delay)*1000 + 500);
  }

  function start(){
    if(intervalId) return;
    intervalId = setInterval(()=>{
      // spawn a few pieces each tick
      for(let i=0;i<6;i++) createPiece();
    }, 250);
  }
  // confetti runs continuously by default

  if(downloadBtn){
    downloadBtn.addEventListener('click', ()=>{
      // quick snapshot using html2canvas approach is heavy; instead offer a prompt to print-to-PDF
      alert('To save this card as an image: use your browser\'s Print -> Save as PDF, or take a screenshot.');
    });
  }

  // start on load
  start();
})();
