let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {
        inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
        inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
        inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
}); 

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
});

document.getElementById('btn_pr').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'pr';
    inputWindow.value = '';
});

document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
});

document.getElementById('btn_sqr').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqr';
    inputWindow.value = '';
});

document.getElementById('btn_res').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result};
    if (operation === 'def') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result
        };
    if (operation === 'pr') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result
        };
    if (operation === 'del') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result
        };
    if (operation === 'sqr') {
        const test = Math.sqrt(parseInt(inputWindow.value));
        operation = null;
        lastOperand = 0;
        inputWindow.value = test
        };
        console.log(inputWindow.value);
    });


//document.querySelector('#btn_res').addEventListener('click', (event) => {
//    inputWindow.focus();
//    if (event.target.textContent == 'sqr' && isFinite(inputWindow.value)) {
//       inputWindow.value = Math.sqrt(parseFloat(inputWindow.value).toFixed(3));
//       console.log(Math.sqrt(parseFloat(inputWindow.value).toFixed(3)));        
//    };
//});

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});


