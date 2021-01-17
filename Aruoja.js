// tunniplaani objekt
const tunniplaan = new Tunniplaan(17, '2021-01-11');
// kasutajaliidese objekt
const kl = new KasutajaLiides();

// tunniplaani väljastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaanAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}