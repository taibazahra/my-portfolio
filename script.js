document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#00f7ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00f7ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    
    // Typed.js for header title animation
    const typed = new Typed('.typing-title', {
      strings: [
        'AI Integration Specialist',
        'Creative Technologist',
        'Machine Learning Enthusiast',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false
    });
    
    // Chatbot widget interaction
    const chatbotWidget = document.getElementById('chatbotWidget');
    chatbotWidget.addEventListener('click', function() {
      alert("AI Chatbot: Hello! I'm Taiba's virtual assistant. Thank you for visiting my portfolio. You can reach out to me via the contact section. Let's connect and explore the world of AI together! 😊");
    });
    
    // Smooth scrolling for navigation
    $('nav a').on('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100,
          },
          800
        );
      }
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Add floating AI elements
    function createFloatingAI() {
      const aiIcons = ['🤖', '🧠', '⚙️', '🔍', '💡', '📊', '🌐'];
      const section = document.createElement('div');
      section.className = 'floating-ai';
      section.textContent = aiIcons[Math.floor(Math.random() * aiIcons.length)];
      section.style.left = Math.random() * 100 + 'vw';
      section.style.top = Math.random() * 100 + 'vh';
      section.style.fontSize = (Math.random() * 20 + 10) + 'px';
      section.style.animationDuration = (Math.random() * 10 + 5) + 's';
      section.style.opacity = Math.random() * 0.3 + 0.1;
      document.body.appendChild(section);
      
      setTimeout(() => {
        section.remove();
      }, 15000);
    }
    
    // Create initial floating AI elements
    for (let i = 0; i < 15; i++) {
      setTimeout(createFloatingAI, i * 1000);
    }
    
    // Continue creating floating AI elements periodically
    setInterval(createFloatingAI, 3000);
    
    // Terminal typing effect
    const terminalCommands = [
      "analyze_portfolio --skills=ai,design,development",
      "recommend_jobs --field=ai_integration --level=entry",
      "connect_with --name=recruiter --message='Hire Taiba!'",
      "run --project=mindful_chatbot --demo=true"
    ];
    
    let currentCommand = 0;
    const typingElement = document.querySelector('.typing-effect');
    
    function typeCommand() {
      const command = terminalCommands[currentCommand];
      let i = 0;
      typingElement.textContent = '';
      typingElement.classList.add('typing-effect');
      
      const typingInterval = setInterval(() => {
        if (i < command.length) {
          typingElement.textContent += command.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            typingElement.classList.remove('typing-effect');
            setTimeout(eraseCommand, 2000);
          }, 1000);
        }
      }, 100);
    }
    
    function eraseCommand() {
      let text = typingElement.textContent;
      const erasingInterval = setInterval(() => {
        if (text.length > 0) {
          text = text.substring(0, text.length - 1);
          typingElement.textContent = text;
        } else {
          clearInterval(erasingInterval);
          currentCommand = (currentCommand + 1) % terminalCommands.length;
          setTimeout(typeCommand, 500);
        }
      }, 50);
    }
    
    // Start the typing effect
    setTimeout(typeCommand, 3000);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
      window.scrollTo({
        top: document.getElementById('about').offsetTop - 100,
        behavior: 'smooth'
      });
    });
    
    // Animate skills on scroll
    const skillBars = document.querySelectorAll('.progress-fill');
    function animateSkills() {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });