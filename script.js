console.log("LIVE!");

const music = document.getElementById('days');
  
  function playMusic() {
    if (music.paused) {
        music.play().then(function() {
            console.log("MUSIC STARTED!");
            removeListener();
        });
    }
}
         
  function removeListener() {
  window.removeEventListener('click', playMusic);
  window.removeEventListener('touchstart', playMusic);
}

  window.addEventListener('click', playMusic);
  window.addEventListener('touchstart', playMusic);

const openMenuBtn = document.getElementById('open-nav');
  const closeMenuBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('menu');

  openMenuBtn.addEventListener('click', function() {
  sidebar.classList.add('active');
});

  closeMenuBtn.addEventListener('click', function() {
  sidebar.classList.remove('active');
});

const runBtn = document.getElementById('run');
  const inputBtn = document.getElementById('input');
  const outputBtn = document.getElementById('output');

  runBtn.addEventListener('click', function() {
   const code = input.value;
   let logs = [];
   const originalConsoleLog = console.log;
   console.log = function(...args) {
    logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(''));
    originalConsoleLog.apply(console, args);
   };

   try {
    let result = eval(code);
    if (result !== undefined && logs.length === 0) {
     logs.push(result);
    }

    output.textContent = logs.join('\n') || "Executed (no output)";
    output.style.color = "#0f0";
   } catch (error) {
      output.textContent = error.toString();
      output.style.color = "#ff5555";
   }

   console.log = originalConsoleLog;
  });

