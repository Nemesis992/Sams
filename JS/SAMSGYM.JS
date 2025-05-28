// Lista de sugerencias válidas
const suggestions = [
    "Playera",
    "Short",
    "Pans",
    "Licra",
    "Sudadera",
    "Top",
    "YoungLA",
    "GymShark",
    "Dry Fit"
];

function showSuggestions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = "";

    if (!input.trim()) return;

    const filtered = suggestions.filter(item => item.toLowerCase().includes(input));
    
    filtered.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => {
            document.getElementById("searchInput").value = item;
            suggestionBox.innerHTML = "";
            filterProducts();
        };
        suggestionBox.appendChild(li);
    });
}

function filterProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product-card");
    const suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = ""; // Borra sugerencias al buscar

    products.forEach(product => {
        const title = product.querySelector("h3").textContent.toLowerCase();
        const altText = product.querySelector("img").alt.toLowerCase();

        if (title.includes(input) || altText.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Mostrar/Ocultar menú en móvil
function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("show");
}

// Submenú desplegable en móviles
document.addEventListener("DOMContentLoaded", () => {
    const dropdownLinks = document.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.parentElement.classList.toggle('open');
            }
        });
    });
});
