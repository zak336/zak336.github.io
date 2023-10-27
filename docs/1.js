document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    const cross = document.querySelector(".cross");

    sidebar.classList.toggle("sidebargo");
    
    if (sidebar.classList.contains("sidebargo")) {
        sidebar.style.display = "inline";
        cross.style.display = "none";
    } else {
        sidebar.style.display = "none"; // Hide sidebar when it's not active
        setTimeout(() => {
            cross.style.display = "inline";
        }, 350);
    }
});
