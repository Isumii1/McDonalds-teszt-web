function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}
window.addEventListener('DOMContentLoaded', () => {
    const temaCookie = getCookie("tema");
    if (temaCookie) {
        if (temaCookie === "dark") {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else if (temaCookie === "light") {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }
});
window.addEventListener('visibilitychange', () => {
    const temaCookie = getCookie("tema");
    if (temaCookie) {
        if (temaCookie === "dark") {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else if (temaCookie === "light") {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }
});
