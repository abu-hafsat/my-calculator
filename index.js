const screen = document.getElementById("screen");
const btns = document.getElementsByClassName("btn");
const equal = document.getElementById("btn-equal");
const time = document.getElementById("clock");

currentValue = "";

const evaluateResult = () => {
    const result = eval(currentValue);
    currentValue = result;
    screen.value = currentValue;
}

equal.addEventListener('click', function() {
    evaluateResult();

})


for (i = 0; i < btns.length; i++) {
   const btn = btns[i];
    btn.addEventListener("click", function() {
        const value = btn.innerHTML;
        if( value == "del") {
            currentValue = "";
            screen.value = currentValue;
        }else if (value == "="){ 

        } else { 
        currentValue += value;
        screen.value = currentValue;
        }
    })
}

const d = new Date();
let h = d.getHours();
let s = d.getSeconds();
let m = d.getMinutes();
time.innerText = h + ':' + m + ":" + s;
setTimeout(1000);