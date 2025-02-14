document.getElementById("surpriseBtn").addEventListener("click", function () {
    // Show the surprise message
    document.getElementById("surpriseMessage").classList.add("show");

    // Wait for 3 seconds before navigating
    setTimeout(function () {
        window.location.href = "gallery.html";
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const heartsContainer = document.getElementById('heartsContainer');
  
    surpriseBtn.addEventListener('click', function() {
      surpriseMessage.classList.add('show');
  
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heartsContainer.appendChild(heart);
        setTimeout(function() {
          heart.classList.add('show');
        }, i * 500);
      }
    });
  });
  