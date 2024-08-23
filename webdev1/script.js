document.getElementById('emailButton').addEventListener('click', function() {
    window.location.href = 'mailto:ljmay002@louisville.edu.com';
  });

  document.getElementById("linkedinbutton").addEventListener("click", function() {
    var linkedInUrl = "https://www.linkedin.com/in/lincoln-may";   
    window.open(linkedInUrl, "_blank");
});

document.getElementById("githubbutton").addEventListener("click", function() {
  var linkedInUrl = "https://github.com/lincolnmay01";   
  window.open(linkedInUrl, "_blank");
});

