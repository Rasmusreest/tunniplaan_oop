// tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-04');

// tunniplaani väljastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan(){
    tunniplaan.opetajaTunniplaanAndmed().then(tunnid => {
        console.log(tunnid);
    }).catch(viga => console.log(viga));
}