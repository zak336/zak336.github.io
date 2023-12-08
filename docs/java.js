// Function to toggle sidebar visibility
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show-sidebar');
  }
  
  // Function to close sidebar when tapping outside the sidebar area
  document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not part of the sidebar
    if (!event.target.closest('.sidebar') && !event.target.matches('.sidebar-toggle')) {
      document.querySelector('.sidebar').classList.remove('show-sidebar');
    }
  });
  