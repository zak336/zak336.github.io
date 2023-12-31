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
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe0I4oIi6VSQML7vjXyo3SnwJZymzFKR0tMo6QMlff3JkMdMw/viewform?embedded=true', '_blank'; // Replace 'main_page.html' with your main page URL
} //https://docs.google.com/forms/d/e/1FAIpQLSe0I4oIi6VSQML7vjXyo3SnwJZymzFKR0tMo6QMlff3JkMdMw/viewform?embedded=true



function redirectToMainPage() {
    window.location.href = '../index.html';
}

function changeColor(event) {
    const sidebarLink = event.target;
    const originalColor = window.getComputedStyle(sidebarLink).color;

    // Change color on click
    sidebarLink.style.color = 'green';

    // Reset color after a delay
    setTimeout(function () {
        sidebarLink.style.color = originalColor;
    }, 400);
}

// Get the height of the fixed nav
const navHeight = document.querySelector('.desktop-nav').offsetHeight;

// Add margin to the content to avoid overlap
document.querySelector('.content').style.marginTop = navHeight + 'px';

// Optionally, handle resizing of the window to adjust the margin dynamically
window.addEventListener('resize', function () {
    const newNavHeight = document.querySelector('.desktop-nav').offsetHeight;
    document.querySelector('.content').style.marginTop = newNavHeight + 'px';
});

// use scroll event to add/remove a class when scrolled past the nav
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.desktop-nav');
    if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});

window.onscroll = function () {
    showButton();
};

function showButton() {
    var button = document.getElementById("moveToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function moveToTop() {
    var scrollToTop = window.setInterval(function () {
        var pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // Adjust the value to control scrolling speed
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16); // Adjust the interval for smoother scrolling
}
