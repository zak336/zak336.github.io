// Function to toggle sidebar visibility
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show-sidebar');
}

// Check if the viewport width is less than or equal to 768px (mobile view)
function isMobileView() {
    return window.innerWidth <= 768;
}

// Function to handle touchstart event on the body
document.body.addEventListener('touchstart', function (event) {
    // Check if it's a touch event and if the viewport is in mobile view
    if (event.touches.length === 1 && isMobileView()) {
        // Toggle the sidebar when touched outside the sidebar area
        if (!event.target.closest('.sidebar') && !event.target.matches('.sidebar-toggle')) {
            toggleSidebar();
        }
    }
});
