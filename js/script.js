// Menu
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
    document.getElementById('menuOverlay').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('menuOverlay').classList.remove('active');
}

//hero 
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const text = "Hoài Nhân"; // Nội dung gõ
  let index = 0;

  function typeEffect() {
    typingText.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      index = 1; // Lặp lại từ đầu
    }
    setTimeout(typeEffect, 200); // Tốc độ gõ chữ
  }

  typeEffect();

  AOS.init({
    duration: 1000, 
    once: true, 
  });
});


//about
document.addEventListener("DOMContentLoaded", () => {
    const aboutTypedText = "About Me";
    const typedElement = document.getElementById("typed-about");

    let index = 0;
    function typeEffect() {
        if (index < aboutTypedText.length) {
            typedElement.textContent += aboutTypedText.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Tốc độ gõ chữ
        } else {
            setTimeout(() => {
                typedElement.textContent = "";
                index = 0;
                typeEffect();
            }, 5000); // Lặp lại sau 5 giây
        }
    }
    typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
  const typeEffect = (elementId, text) => {
    const element = document.getElementById(elementId);
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, 150);
      } else {
        setTimeout(() => {
          element.textContent = "";
          index = 0;
          type();
        }, 4000);
      }
    };

    type();
  };
  typeEffect("typed-skills", "Skill Tool");
});











//services
document.addEventListener("DOMContentLoaded", () => {
  const typeEffect = (elementId, text) => {
    const element = document.getElementById(elementId);
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, 150);
      } else {
        setTimeout(() => {
          element.textContent = "";
          index = 0;
          type();
        }, 2000); // Reset sau 2 giây
      }
    };

    type();
  };

  AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: true
  });

  typeEffect("typed-services", "Services");
});




//feedback
document.addEventListener("DOMContentLoaded", () => {
  const typeEffect = (elementId, text) => {
    const element = document.getElementById(elementId);
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, 150);
      } else {
        setTimeout(() => {
          element.textContent = "";
          index = 0;
          type();
        }, 2000); // Reset sau 2 giây
      }
    };

    type();
  };

  AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  typeEffect("typed-feedback", "Feedback");
});


document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".masonry-grid");
    const iso = new Isotope(grid, {
        itemSelector: ".masonry-item",
        layoutMode: "fitRows",
    });

    document.querySelectorAll(".filter-btn").forEach((btn) =>
        btn.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
        })
    );
});



document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");
  const modalImage = document.getElementById("modalImage");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      button.classList.add("active");
      filterItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
          setTimeout(() => {
            item.classList.add("active");
          }, 50);
        } else {
          item.classList.remove("active");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
    });
  });
});