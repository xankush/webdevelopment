var a = "";
var b = "";
var c = "";
var sign = "";

var equal = document.getElementById("equals");
var p = document.getElementById("output");
var reset = document.getElementById("reset");






reset.addEventListener("click", function () {
    p.innerHTML = "";
    a = "";
    b = "";
    sign = "";
    c = "";
    console.log("a = " + a);
    console.log("b =" + b);

})

equal.addEventListener("click", function(){
    c =  calculation();
    p.innerHTML = c;
});



function input_value(m) {
    if (a == "") {
        a = parseInt(m);
        p.innerHTML = a;
    }
    else if (sign == "") {
        a = parseInt(a + m);
        p.innerHTML = a;

    }
    else if (b == "") {
        b = parseInt(m);
        p.innerHTML += b;
    }
    else {
        b = parseInt(b + m);
        p.innerHTML += m;
    }
    console.log("a = " + a);
    console.log("b =" + b);
}

function operator(s) {
    if (sign == "" && a!="") {
        sign = s;
        p.innerHTML += sign;
        console.log(sign);
    }
    else{
        if(b!=""){
            a=calculation();
            sign = s;
            b="";
            p.innerHTML = a + s;
            console.log("a = " + a);
            console.log("b =" + b);
            console.log("sign =" + sign);


        }
    }
}
function calculation(){
    switch (sign) {
        case "+":
            c = a + b;
            sign = "";
            break;
        case "*":
            c = a * b;
            sign = "";
            break;
        case "/":
            c = a / b;
            sign = "";
            break;
        case "-":
            c = a - b;
            sign = "";
            break;
    }
    console.log(c);
    // p.innerHTML = c;
    return c;
}

