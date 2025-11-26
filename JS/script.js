
// Efeito de digitação automática na Home
const typed = new Typed(".multiple-text", {
    strings: [
        "estudante...",
        "desenvolvedora júnior...",
        "leitora...",
        "exploradora de códigos...",
        "caçadora de 'porquês'...", 
        "entusiasta de banco de dados..."
    ],
    typeSpeed: 70,   // Velocidade de digitação
    backSpeed: 50,   // Velocidade de apagar
    backDelay: 1000, // Tempo de espera antes de apagar
    loop: true,      // Repetir infinitamente
});


// ------- TEMA CLARO / ESCURO ---------
// Seleção dos elementos do DOM
const themeToggle = document.getElementById('themeToggle');     // O botão
const body = document.body;                                     // O corpo do site
const themeIcon = document.querySelector('.theme-icon');        // O ícone (Sol/Lua)

// Função principal que alterna o tema
function toggleTheme() {
    // 1. Adiciona ou remove a classe 'light-mode' do body
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');

    // 2. Muda o ícone e salva a preferência no navegador
    if (isLightMode) {
        themeIcon.className = 'bx bx-moon theme-icon';         // Muda para Lua
        localStorage.setItem('theme', 'light');                // Salva "light"
    } else {
        themeIcon.className = 'bx bx-sun theme-icon';          // Muda para Sol
        localStorage.setItem('theme', 'dark');                 // Salva "dark"
    }
}

// Adiciona o evento de clique ao botão de alternância
themeToggle.addEventListener('click', toggleTheme);


// Verifica a existiência de um tema salvo anteriormente
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        // Se estava salvo como claro, aplica as classes
        body.classList.add('light-mode');
        themeIcon.className = 'bx bx-moon theme-icon';
    } else {
        // Se não (ou se for dark), garante que está no modo padrão
        body.classList.remove('light-mode');
        themeIcon.className = 'bx bx-sun theme-icon';
    }
}

// Garante que o tema carregue assim que o site abrir
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSavedTheme);
} else {
    loadSavedTheme();
}


