console.log("Hello, World!");

const gallery = document.getElementById("gallery");
const addBtn = document.getElementById("addBtn");
const questions = document.querySelectorAll(".faq-question");

const form = document.querySelector("contact-form");


  // Image list
  const imageArray = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3"
  ];

  // Load initial images
  function displayImages() {

    gallery.innerHTML = "";

    imageArray.forEach((src) => {

      const img = document.createElement("img");

      img.src = src;

      // Remove image when clicked
      img.addEventListener("click", () => {
        img.remove();
      });

      gallery.appendChild(img);
    });
  }
  

  // Add new image dynamically
  addBtn.addEventListener("click", () => {

    const random = Math.floor(Math.random() * 1000);

    imageArray.push(
      `https://picsum.photos/300/200?random=${random}`
    );

    displayImages();
  });

   // RUN FUNCTIONS
 displayImages();

 //FAQ QUESTIONS
 
   questions.forEach((question) => {

    question.addEventListener("click", () => {

      const answer =
        question.nextElementSibling;

      answer.classList.toggle("show");

    });

  });
  
  // FORM VERIFICATION

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;
    // Name validation
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    }

    // Password validation
    if (message === "" ) {
      messageError.textContent = "Please write a message"
      isValid = false;
    }

    // Success
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }

  });
  

 