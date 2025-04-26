const robot = document.getElementById('robot');

robot.addEventListener('click', () => {
  alert("🤖 BEEP BOOP! Let's talk AI integration!");
});

robot.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');
  const rect = robot.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  eyes.forEach(eye => {
    const eyeX = eye.classList.contains('left-eye') ? rect.width * 0.25 : rect.width * 0.75;
    const eyeY = rect.height * 0.5;
    const angle = Math.atan2(y - eyeY, x - eyeX);
    eye.style.transform = `rotate(${angle}rad) translateX(5px)`;
  });
});
