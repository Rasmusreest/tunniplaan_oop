class Tunniplaan{
    constructor(opetaja, kuupaev) {
        this.opetaja = opetaja;
        this.kuupaev = kuupaev;
    }

    async opetajaTunniplaanAndmed() {
        const vastus = await fetch('https://siseveeb.khk.ee/veebilehe_andmed/tunniplaan?opetaja=' + this.opetaja + '&nadal=' + this.kuupaev);
        const andmed = await vastus.json();
        return andmed;
    }
}

// õpetaja vahetamine
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


