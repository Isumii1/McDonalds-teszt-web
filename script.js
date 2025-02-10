document.getElementById("vilagos").addEventListener("click", () => {
document.documentElement.setAttribute('data-bs-theme', 'light');
setCookie("tema", "light", 7);
});

document.getElementById("sotet").addEventListener("click", () => {
document.documentElement.setAttribute('data-bs-theme', 'dark');
setCookie("tema", "dark", 7);
})

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

window.addEventListener('DOMContentLoaded', () => {
    // Az alert felületet az oldal betöltődése után inicializáljuk
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

    const appendAlert = (message, type) => {
        // Figyelmeztető üzenet létrehozása
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        // Üzenet hozzáadása az alertPlaceholder-hez
        alertPlaceholder.append(wrapper);

        // 3 másodperc múlva eltávolítjuk a figyelmeztetést
        setTimeout(() => {
            alertPlaceholder.removeChild(wrapper);
        }, 3000);
    };

    // Vélemény küldés eseménykezelő
    const velemenyKuldese = document.getElementById('velemeny-kuldese');

    velemenyKuldese.addEventListener('click', () => {
        const nev = document.getElementById('nev').value;
        const velemenyTartalom = document.getElementById('velemeny-tartalom').value;

        if (!nev) {
            appendAlert("Kötelező a név megadása", "danger");
        } else if (!velemenyTartalom) {
            appendAlert("Kötelező a vélemény megadása", "danger");
        } else {
            const tartalom = `
            <div class="col-12 col-sm-6 col-lg-4 p-5">
                <div class="text-center">
                    <img src="./Képek/customer.png" alt="" class="img-fluid" width="100">
                </div>
                <h2 class="fw-normal text-center my-3">${nev}</h2>
                <p class="text-center text-break">${velemenyTartalom}</p>
            </div>
            `;
            const velemenyek = document.getElementById('velemenyek');
            velemenyek.insertAdjacentHTML('afterbegin', tartalom);
            appendAlert("A vélemény sikeresen hozzáadva", "success");
        }
        document.getElementById('nev').value = "";
        document.getElementById('velemeny-tartalom').value = "";
    });
});