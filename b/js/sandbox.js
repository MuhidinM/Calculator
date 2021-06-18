let erase = document.querySelector("#erase");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#ans");
let per = document.querySelector("#per");
let point = document.querySelector("#point");
let div = document.querySelector("#div");
let minus = document.querySelector("#minus");
let mult = document.querySelector("#mult");
let plus = document.querySelector("#plus");
let db_zero = document.querySelector("#db_zero");
let b0 = document.querySelector("#zero");
let b1 = document.querySelector("#one");
let b2 = document.querySelector("#two");
let b3 = document.querySelector("#three");
let b4 = document.querySelector("#four");
let b5 = document.querySelector("#five");
let b6 = document.querySelector("#six");
let b7 = document.querySelector("#seven");
let b8 = document.querySelector("#eight");
let b9 = document.querySelector("#nine");

let write = document.querySelector("#type");
let result = document.querySelector("#result");

b0.onclick = () => {
    type_to(0);
};
db_zero.onclick = () => {
    type_to("00");
};
b1.onclick = () => {
    type_to(1);
};
b2.onclick = () => {
    type_to(2);
};
b3.onclick = () => {
    type_to(3);
};
b4.onclick = () => {
    type_to(4);
};
b5.onclick = () => {
    type_to(5);
};
b6.onclick = () => {
    type_to(6);
};
b7.onclick = () => {
    type_to(7);
};
b8.onclick = () => {
    type_to(8);
};
b9.onclick = () => {
    type_to(9);
};
plus.onclick = () => {
    type_to("+");
};
minus.onclick = () => {
    type_to("-");
};
mult.onclick = () => {
    type_to("*");
};
div.onclick = () => {
    type_to("/");
};
per.onclick = () => {
    type_to("%");
};
point.onclick = () => {
    type_to(".");
};
clear.onclick = () => {
    clear_screen();
};
erase.onclick = () => {
    erase_screen();
};
equal.onclick = ()=>{
    calculate();
};

document.onkeyup = e =>{
    if (e.key == "0" || e.key == "Num0"){
        type_to(0);
    } else if (e.key == "1" || e.key == "Num1"){
        type_to(1);
    } else if (e.key == "2" || e.key == "Num2"){
        type_to(2);
    } else if (e.key == "3" || e.key == "Num3"){
        type_to(3);
    } else if (e.key == "4" || e.key == "Num4"){
        type_to(4);
    } else if (e.key == "5" || e.key == "Num5"){
        type_to(5);
    } else if (e.key == "6" || e.key == "Num6"){
        type_to(6);
    } else if (e.key == "7" || e.key == "Num7"){
        type_to(7);
    } else if (e.key == "8" || e.key == "Num8"){
        type_to(8);
    } else if (e.key == "9" || e.key == "Num9"){
        type_to(9);
    } else if (e.key == "+" || e.key == "Num+"){
        type_to("+");
    } else if (e.key == "-" || e.key == "Num-"){
        type_to("-");
    } else if (e.key == "*" || e.key == "NumP"){
        type_to("*");
    } else if (e.key == "/" || e.key == "Num/"){
        type_to("/");
    } else if (e.key == "%" || e.key == "Num%"){
        type_to("%");
    } else if (e.key == "." || e.key == "Num."){
        type_to(".");
    } else if (e.key == "Enter" || e.key == "Numenter"){
        calculate();
    } else if (e.key == "Backspace" || e.key == "Escape"){
        erase_screen();
    } else if (e.key == "Delete"){
        clear_screen();
    }
};

let type_to = text =>{
    if (write.innerText == ""){
        write.innerText = text;
    }else if (write.innerText.length <=23){
        write.innerText = write.innerText + text;
    }else{
        alert("digital limit reached")
    }
};


let calculate = () =>{
    let res = write.innerText;
    if (res.indexOf("%") == -1){
        if (res.indexOf("*") != -1){
            res = res.replace("*", "*");
        }
    }else{
        res = res.replace("%", "");
        if (res.indexOf("*") != -1){
            let res_ar = res.split("*");
            let total = eval(res_ar[0]);
            let need = eval(res_ar[1]);
            res = (need/100)*total;
        }else{
            alert("Math error. Percent can't be evaluated with out a multiplication");
        }
    }
    result.innerText = eval(res);
};

let clear_screen = () =>{
    write.innerText = "";
}

let erase_screen = () =>{
    write.innerText = write.innerText.substr(0,write.innerText.length - 1);
}

















