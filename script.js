$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("#nav-menu").slideToggle(300);
  });

  $(".container").hide().fadeIn(800);

  $("#contactForm").submit(function(e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    $("#contactForm")[0].reset();
  });
});
