// テーマの適用
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else if (theme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
        // auto: OS設定に従う
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }
}

// アイコンの切り替え
function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    if (theme === 'dark') {
        icon.className = 'bi bi-moon';
    } else if (theme === 'light') {
        icon.className = 'bi bi-sun';
    } else {
        icon.className = 'bi bi-circle-half';
    }
}

// テーマの取得
function getStoredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }
    return 'auto';
}

// テーマの切り替え
function toggleTheme() {
    const current = getStoredTheme();
    let newTheme;
    if (current === 'auto') {
        newTheme = 'light';
    } else if (current === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'auto';
    }

    if (newTheme === 'auto') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', newTheme);
    }
    applyTheme(newTheme);
    updateThemeIcon(newTheme);
}

// 初期化
function initTheme() {
    let theme = getStoredTheme();
    applyTheme(theme);
    updateThemeIcon(theme);
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
}

document.addEventListener('DOMContentLoaded', initTheme); 