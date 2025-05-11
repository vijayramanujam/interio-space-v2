  function animateNumbers() {
    const counters = document.querySelectorAll('.display-4');
    const speed = 2000;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
      }
    });
  });

  const metricsSection = document.querySelector('#metrics-section');
  observer.observe(metricsSection);

  document.getElementById('clients-metrics').setAttribute('data-target', '2500');
  document.getElementById('projects-metrics').setAttribute('data-target', '180');
  document.getElementById('team-metrics').setAttribute('data-target', '30');

    window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY;

    let gradientStart = `rgb(${255 - Math.min(scrollPosition, 255)}, 126, 95)`;
    let gradientEnd = `rgb(${255 - Math.min(scrollPosition, 255)}, 180, 123)`;


    document.querySelector('.gradient-background').style.background = `linear-gradient(180deg, ${gradientStart}, ${gradientEnd})`;
  });

   document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });