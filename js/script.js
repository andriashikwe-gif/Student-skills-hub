const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
            darkModeBtn.textContent = "🌙 Dark Mode";
        }

    });

}

if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
    darkModeBtn.classList.remove("btn-dark");
    darkModeBtn.classList.add("btn-warning");
} else {
    darkModeBtn.textContent = "🌙 Dark Mode";
    darkModeBtn.classList.remove("btn-warning");
    darkModeBtn.classList.add("btn-dark");
}

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let searchText = searchBox.value.toLowerCase();

        let resources = document.querySelectorAll(".resource");

        resources.forEach(function(resource) {

            let text = resource.textContent.toLowerCase();

            if (text.includes(searchText)) {
                resource.style.display = "block";
            } else {
                resource.style.display = "none";
            }

        });

    });

}