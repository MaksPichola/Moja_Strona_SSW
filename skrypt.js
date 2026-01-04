let sekundy = 0;
setInterval(function() {
    sekundy++;
    const stopka = document.querySelector('.footer p');
    if(stopka) {
        stopka.innerHTML = "Czas sesji: " + sekundy + " sekund | Kontakt: +48 22 660 44 33 ";
    }
}, 1000);

function podswietl(element) {
    element.style.backgroundColor = "#e0f7fa";
}

function odswietl(element) {
    element.style.backgroundColor = "transparent";
}

function validateForm() {
    let imie = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let miejsceNaBlad = document.getElementById("blad");

    if (imie === "" || email === "") {
        miejsceNaBlad.innerHTML = "Błąd: Imię i E-mail są wymagane!";
        return false;
    }

    miejsceNaBlad.innerHTML = "";
    alert("Wiadomość została wysłana pomyślnie!");
    return true;
}