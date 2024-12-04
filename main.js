
window.onload = function() {
    alert("Bem-vindo ao meu portfólio!");
};


function toggleHabilidades() {
    const habilidadesList = document.getElementById('habilidades-list');
    if (habilidadesList.style.display === "none" || habilidadesList.style.display === "") {
        habilidadesList.style.display = "block";
    } else {
        habilidadesList.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const habilidadesButton = document.getElementById('habilidades-button');
    habilidadesButton.addEventListener('click', toggleHabilidades);
});