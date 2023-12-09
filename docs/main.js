// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
}

// Event listener for the close button to toggle the sidebar
const closeButton = document.querySelector('.close-sidebar');
if (closeButton) {
    closeButton.addEventListener('click', toggleSidebar);
}

// Function to close sidebar if touched outside the sidebar
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    // Check if the clicked element is not the sidebar or its toggle button
    if (!event.target.closest('.sidebar') && event.target !== sidebarToggle) {
        sidebar.classList.remove('show-sidebar');
    }
});


function redirectToGoogleForm() {
    window.location.href = 'form.html', '_blank'; // Replace 'main_page.html' with your main page URL
} //https://docs.google.com/forms/d/e/1FAIpQLSe0I4oIi6VSQML7vjXyo3SnwJZymzFKR0tMo6QMlff3JkMdMw/viewform?embedded=true



function redirectToMainPage() {
    window.location.href = 'index.html'; // Replace 'main_page.html' with your main page URL
}

function changeColor(event) {
    const sidebarLink = event.target;
    const originalColor = window.getComputedStyle(sidebarLink).color;

    // Change color on click
    sidebarLink.style.color = 'red'; // Change this to your desired color

    // Reset color after a delay
    setTimeout(function () {
        sidebarLink.style.color = originalColor;
    }, 1000); // Adjust the duration as needed
}