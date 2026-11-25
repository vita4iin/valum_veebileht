const revealSections = document.querySelectorAll(
  "#valjak, #serv, #ralli, #skoor, #start"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
  }
);

revealSections.forEach(section => {
  const sectionTop = section.getBoundingClientRect().top;
  const alreadyVisible = sectionTop < window.innerHeight;

  section.classList.add("reveal");

  if (alreadyVisible) {
    section.classList.add("is-visible");
  } else {
    revealObserver.observe(section);
  }
});

const progressBar = document.getElementById("progress");
const progress = document.querySelector("#progress");
window.addEventListener("scroll", function() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentScrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    progressBar.style.width = percentScrolled + "%";
});

