document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        themeToggleBtn.textContent = "Dark Mode";
    } else {
        themeToggleBtn.textContent = "Light Mode";
    }

    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggleBtn.textContent = "Dark Mode";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggleBtn.textContent = "Light Mode";
        }
    });
});
