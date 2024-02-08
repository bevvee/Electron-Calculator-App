var nbr = '';
var result = document.getElementById('result');

function zero() {
    if (result.value !== '0') {
        result.value += '0';
    }
}

function coma() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function one() {
    updateResult('1');
}

function two() {
    updateResult('2');
}

function three() {
    updateResult('3');
}

function four() {
    updateResult('4');
}

function five() {
    updateResult('5');
}

function six() {
    updateResult('6');
}

function seven() {
    updateResult('7');
}

function eight() {
    updateResult('8');
}

function nine() {
    updateResult('9');
}

function plus() {
    nbr += result.value + '+';
    result.value = '0';
}

function moins() {
    nbr += result.value + '-';
    result.value = '0';
}

function multipl() {
    nbr += result.value + '*';
    result.value = '0';
}

function division() {
    nbr += result.value + '/';
    result.value = '0';
}

function cleaq() {
    result.value = '0';
    nbr = '';
}

function pourcentage() {
    var percentage = result.value * 0.01;
    result.value = percentage;
}

var toggleSign = 1;
function plusoumoins() {
    result.value = parseFloat(result.value) * toggleSign;
    toggleSign = -toggleSign;
}

function equal() {
    nbr += result.value;
    result.value = eval(nbr);
    nbr = '';
}

function updateResult(value) {
    if (result.value === '0' || result.value === '-0') {
        result.value = value;
    } else {
        result.value += value;
    }
}