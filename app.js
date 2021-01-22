// tunniplaani objekt
let opetaja;

function Andmed() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn").value = 45750;
    valjastaTunniplaan();
}

function Andmed1() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn1").value = 28131;
    valjastaTunniplaan();
}

function Andmed2() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn2").value = 832;
    valjastaTunniplaan();
}

function Andmed3() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn3").value = 71;
    valjastaTunniplaan();
}

function Andmed4() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn4").value = 121;
    valjastaTunniplaan();
}

function Andmed5() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn5").value = 17;
    valjastaTunniplaan();
}

function Andmed6() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn6").value = 756;
    valjastaTunniplaan();
}

function Andmed7() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn7").value = 45481;
    valjastaTunniplaan();
}

function Andmed8() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn8").value = 146;
    valjastaTunniplaan();
}

function Andmed9() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn9").value = 42967;
    valjastaTunniplaan();
}

function Andmed_1() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn10").value = 32086;
    valjastaTunniplaan();
}

function Andmed_2() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn11").value = 35657;
    valjastaTunniplaan();
}

function Andmed_3() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn12").value = 33099;
    valjastaTunniplaan();
}

function Andmed_4() {
    // eemaldab eelmise tunniplaani alt
    $('.timetable-workout').empty();
    tunniplaan.opetaja = document.getElementById("btn13").value = 45727;
    valjastaTunniplaan();
}

// tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-11');
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


