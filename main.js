
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href").substring(1);

            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
        });
    });
});
