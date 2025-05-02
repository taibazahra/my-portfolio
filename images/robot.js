// Enhanced Interactive Robot
const robot = document.getElementById('robot');
const eyes = document.querySelectorAll('.eye');
const sections = document.querySelectorAll('section');

// Enhanced click interaction with personality
robot.addEventListener('click', (e) => {
  const messages = [
    "BEEP BOOP! Let's talk AI!",
    "AI integration is my passion!",
    "Want to see my projects? Scroll up!",
    "I love creating intelligent solutions!",
    "Let's build something amazing together!"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  
  // Create speech bubble with animation
  const bubble = document.createElement('div');
  bubble.className = 'robot-speech-bubble';
  bubble.textContent = randomMsg;
  robot.appendChild(bubble);
  
  // Animate the bubble with more personality
  setTimeout(() => bubble.classList.add('bubble-fade-in'), 100);
  
  // Add random color animation
  const colors = ['#00f7ff', '#4776E6', '#9d50bb'];
  let currentColor = 0;
  
  const colorInterval = setInterval(() => {
    bubble.style.color = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
  }, 500);
  
  // Remove after delay
  setTimeout(() => {
    bubble.classList.add('bubble-fade-out');
    setTimeout(() => {
      bubble.remove();
      clearInterval(colorInterval);
    }, 500);
  }, 3000);
  
  // Add particle explosion with more variety
  for(let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    
    // Random properties
    const size = Math.random() * 10 + 5;
    const angle = Math.random() * 360;
    const speed = Math.random() * 2 + 1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
    
    document.body.appendChild(particle);
    
    anime({
      targets: particle,
      translateX: Math.cos(angle) * (Math.random() * 200),
      translateY: Math.sin(angle) * (Math.random() * 200),
      scale: [1, 0],
      opacity: [1, 0],
      duration: 1000 * speed,
      easing: 'easeOutExpo',
      complete: () => particle.remove()
    });
  }
});

// Eye follow movement with smooth animation
document.addEventListener('mousemove', (e) => {
  const rect = robot.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  eyes.forEach(eye => {
    const eyeX = eye.classList.contains('left-eye') ? 30 : 70;
    const angle = Math.atan2(y - 60, x - eyeX);
    
    // Add smooth transition
    eye.style.transition = 'transform 0.3s ease-out';
    eye.style.transform = `rotate(${angle}rad)`;
  });
});

// Enhanced floating AI elements with more variety
function createFloatingAI() {
  const element = document.createElement('div');
  element.className = 'floating-ai';
  
  // Random icon
  const icons = ['robot', 'brain', 'microchip', 'code'];
  element.innerHTML = `<i class="fas fa-${icons[Math.floor(Math.random() * icons.length)]}"></i>`;
  
  // Random position
  element.style.left = `${Math.random() * 100}vw`;
  element.style.top = `${Math.random() * 100}vh`;
  
  // Random size and rotation
  const size = Math.random() * 20 + 10;
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  // Random animation properties
  const duration = Math.random() * 5 + 3;
  const speed = Math.random() * 2 + 1;
  
  element.style.animationDuration = `${duration}s`;
  element.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
  // Random animation path
  const paths = [
    'float-left',
    'float-right',
    'float-up',
    'float-down',
    'float-diagonal-up',
    'float-diagonal-down'
  ];
  
  element.style.animationName = paths[Math.floor(Math.random() * paths.length)];
  
  document.body.appendChild(element);
  
  // Remove after animation
  setTimeout(() => element.remove(), duration * 1000);
}

// Create initial floating AI elements
for (let i = 0; i < 15; i++) {
  setTimeout(createFloatingAI, i * 1000);
}

// Enhanced section scroll animations with more interactivity
sections.forEach(section => {
  section.addEventListener('mouseenter', (e) => {
    const header = section.querySelector('.section-header h2');
    
    // Create a glow effect that follows the mouse
    const glow = document.createElement('div');
    glow.className = 'section-glow';
    section.appendChild(glow);
    
    // Update glow position on mousemove
    const updateGlow = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.transform = `translate(-50%, -50%)`;
    };
    
    updateGlow(e);
    section.addEventListener('mousemove', updateGlow);
    
    header.style.animation = 'textGlow 2s infinite alternate';
  });
  
  section.addEventListener('mouseleave', () => {
    const header = section.querySelector('.section-header h2');
    const glow = section.querySelector('.section-glow');
    
    if (glow) {
      glow.remove();
    }
    
    section.removeEventListener('mousemove', updateGlow);
    header.style.animation = 'none';
  });
});

// Add typing effect to terminal
document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.querySelector('.terminal-body');
  const commands = [
    '$ whoami',
    'taiba_zahra - AI Integration Specialist - Creative Technologist',
    '$ skills --ai',
    'Python | Machine Learning | AI Integration | UX Design | Project Management',
    '$ contact --social',
    'LinkedIn: taiba-zahra | GitHub: taibazahra | Email: taibazahra6@gmail.com',
    '$ find_job --ai_field --remote'
  ];
  
  let currentCommand = 0;
  let isTyping = false;
  
  function typeCommand() {
    if (isTyping) return;
    isTyping = true;
    
    const command = commands[currentCommand];
    const commandDiv = document.createElement('div');
    commandDiv.className = 'terminal-prompt';
    commandDiv.innerHTML = `$ <span class="terminal-command">${command}</span>`;
    
    terminalBody.appendChild(commandDiv);
    
    // Simulate typing
    let i = 0;
    const interval = setInterval(() => {
      if (i < command.length) {
        commandDiv.innerHTML = `$ <span class="terminal-command">${command.substring(0, i + 1)}</span>`;
        i++;
      } else {
        clearInterval(interval);
        isTyping = false;
        currentCommand++;
        
        if (currentCommand < commands.length) {
          setTimeout(typeCommand, 1000);
        }
      }
    }, 50);
  }
  
  // Start typing
  setTimeout(typeCommand, 1000);
});

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.pageYOffset;
  
  if (scrollPosition > 100) {
    header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  } else {
    header.style.transform = 'translateY(0)';
  }
});

// Add cyber terminal effect
document.querySelector('.terminal-container').addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  document.documentElement.style.setProperty('--terminal-glow-x', `${x * 100}%`);
  document.documentElement.style.setProperty('--terminal-glow-y', `${y * 100}%`);
});