let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// decimal to binary
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
    errorMsg.textContent = '';
})

// binary to decimal
binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    if (!isBinary(binValue)) {
        errorMsg.textContent = 'Invalid binary number';
        decInp.value = '';
        return;
    }
    decInp.value = parseInt(binValue, 2);
    errorMsg.textContent = '';
})

function isBinary(num) {
    return /^[01]+$/.test(num);
}
