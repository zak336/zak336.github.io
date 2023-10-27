document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebargo");
    if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
        document.querySelector(".sidebar").style.display = "block"; // Corrected this line
        document.querySelector(".cross").style.display = "none";
    } else {
        document.querySelector(".hamburger").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 350);
    }
});
