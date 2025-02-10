document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const texts = ["Lakshit Sachdeva", "a Web Developer"];

let index = 0;
let subIndex = 0;
let isDeleting = false;
let isPaused = false;

const typewriter = document.getElementById("typewriter");

const updateText = () => {
  if (isPaused) {
    setTimeout(() => {
      isPaused = false;
      updateText();
    }, 600);
    return;
  }

  const text = texts[index].substring(0, subIndex);
  typewriter.innerHTML = text; // Update the inner HTML of the target element

  if (!isDeleting && subIndex < texts[index].length) {
    subIndex++;
  } else if (isDeleting && subIndex > 0) {
    subIndex--;
  } else if (isDeleting && subIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length; // Switch between the two texts
  } else if (!isDeleting && subIndex === texts[index].length) {
    isPaused = true;
    isDeleting = true;
  }

  setTimeout(updateText, isDeleting ? 75 : 150);
};

updateText(); // Start the typewriter effect
