// JavaScript to toggle the sidebar on button click
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sidebar-toggle').addEventListener('click', function () {
      document.querySelector('.navbar').classList.toggle('show-sidebar');
    });
  });

// function redirectToGoogleForm() {
//     window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe0I4oIi6VSQML7vjXyo3SnwJZymzFKR0tMo6QMlff3JkMdMw/viewform?embedded=true', '_blank'; // Replace 'main_page.html' with your main page URL
//   }

// function redirectToMainPage() {
//     window.location.href = 'index.html'; // Replace 'main_page.html' with your main page URL
//   }