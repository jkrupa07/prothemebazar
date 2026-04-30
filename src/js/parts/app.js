export class App {
  init() {
    this.scrollToTop();
  }

  scrollToTop() {
    const btn = document.getElementById("scrollTopBtn");

    if (!btn) return; // safety

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

