
let holder = document.querySelector(".holder");
let number = document.querySelector(".number");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc3 = document.querySelector(".cvc3");
let ex = document.querySelector(".ex");

let name1 = document.querySelector(".name");
let serial = document.querySelector(".serial");
let monthM = document.querySelector(".m");
let yearY = document.querySelector(".y");
let back = document.querySelector(".back-num");

let paragragh1 = document.createElement("p");
let paragragh2 = paragragh1.cloneNode(true);
let paragragh3 = paragragh1.cloneNode(true);
let paragragh4 = paragragh1.cloneNode(true);
let paragragh5 = paragragh1.cloneNode(true);

let text = document.createTextNode("Can't be blank");

let text11 = document.createTextNode("Wrong format, number only");

let cardHolder = document.querySelector(".card-holder");
let cardNumber = document.querySelector(".card-number");
let lastLine = document.querySelector(".last-line");
let CVC = document.querySelector(".cvc");

let add = document.querySelector(".add");
add.style.cssText = "display: none;";
let conf = document.querySelector(".confirm");

let check = document.createElement("div");
let image = document.createElement("i");
check.appendChild(image);
image.className = "fa-solid fa-check";
add.appendChild(check);

let thank = document.createElement("div");
let tt = document.createTextNode("Thank you!");
thank.appendChild(tt);
add.appendChild(thank);

let details = document.createElement("div");
let tu = document.createTextNode("We've added your card details");
details.appendChild(tu);
add.appendChild(details);

document.forms[0].onkeyup = function () {
    
    if (holder.value !== "") {
        name1.textContent = holder.value;
    }

    if (number.value !== "") {
        let al1 = /\d+/;
        let al2 = /[^0-9\s]/;
        if (number.value.match(al1)) {
            serial.textContent = number.value;
        } 

        if (number.value.match(al2)) {
            paragragh2.appendChild(text11);
            number.after(paragragh2);
            paragragh2.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        }
    }

    if (month.value !== "") {
        if (isNaN(month.value) === true) {
            paragragh3.appendChild(text11.cloneNode(true));
            ex.after(paragragh3);
            ex.style.cssText = "display: flex; flexDirection: column;";
            monthM.textContent = month.value;
            paragragh3.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        } else {
            monthM.textContent = month.value;
        }
    }

    if (year.value !== "") {
        if (isNaN(year.value) === true) {
            paragragh4.appendChild(text11.cloneNode(true));
            ex.after(paragragh4);
            ex.style.cssText =  "display: flex; flexDirection: column;";
            yearY.textContent = year.value;
            paragragh4.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        } else {
            yearY.textContent = year.value;
        }
    }

    if (cvc3.value !== "") {
        if (isNaN(cvc3.value) === true) {
            paragragh5.appendChild(text11.cloneNode(true));
            cvc3.after(paragragh5);
            back.textContent = cvc3.value;
            paragragh5.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-left: 15px; margin-bottom: 0; margin-top: 6px;";
        } else {
            back.textContent = cvc3.value;
        }
    }
};

document.forms[0].onchange = function () {

    if (holder.value !== "") {
        name1.textContent = holder.value;
    }

    if (number.value !== "") {
        let al1 = /\d+/;
        let al2 = /[^0-9\s]/;
        if (number.value.match(al1)) {
            serial.textContent = number.value;
        }
        
        if (number.value.match(al2)) {
            paragragh2.appendChild(text11);
            number.after(paragragh2);
            paragragh2.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        }
    }

    if (month.value !== "") {
        if (isNaN(month.value) === true) {
            paragragh3.appendChild(text11.cloneNode(true));
            ex.after(paragragh3);
            ex.style.cssText = "display: flex; flexDirection: column;";
            monthM.textContent = month.value;
            paragragh3.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        } else {
            monthM.textContent = month.value;
        }
    }

    if (year.value !== "") {
        if (isNaN(year.value) === true) {
            paragragh4.appendChild(text11.cloneNode(true));
            ex.after(paragragh4);
            ex.style.cssText = "display: flex; flexDirection: column;";
            yearY.textContent = year.value;
            paragragh4.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        } else {
            yearY.textContent = year.value;
        }
    }

    if (cvc3.value !== "") {
        if (isNaN(cvc3.value) === true) {
            paragragh5.appendChild(text11.cloneNode(true));
            cvc3.after(paragragh5);
            back.textContent = cvc3.value;
            paragragh5.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 180px; height: 10px; margin-left: 15px; margin-bottom: 0; margin-top: 6px;";
        } else {
            back.textContent = cvc3.value;
        }
    }
};

document.forms[0].onsubmit = function (e) {
    let cardholderName = false;
    let cardNum = false;
    let expDateM = false;
    let expDateY = false;
    let cvc = false;

    if (holder.value !== "") {
        cardholderName = true;
        holder.addEventListener("change", function () {
            name1.value === holder.value;
        });

        if (cardholderName === true) {
            cardHolder.remove();
            e.preventDefault();
        }
    }

    if (number.value !== "") {
        let al1 = /\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d/;
        if (number.value.match(al1)) {
            cardNum = true;
            
            if (cardNum === true) {
                cardNumber.remove();
                e.preventDefault();
            }
        }
    }

    if (month.value !== "") {
        if (isNaN(month.value) === false) {
            expDateM = true;
            
            if (expDateM === true) {
                lastLine.remove();
                e.preventDefault();
            }
        }
    }

    if (year.value !== "") {
        if (isNaN(year.value) === false) {
            expDateY = true;
            if (expDateY === true) {
                lastLine.remove();
                e.preventDefault();
            }
        }
    }

    if (cvc3.value !== "") {
        if (isNaN(cvc3.value) === false) {
            cvc = true;
            if (cvc === true) {
                CVC.remove();
                add.style.cssText = "height: 200px; display: flex; flex-direction: column; justify-content:center; align-items:center; margin-bottom: 50px;"
                check.style.cssText = "width:75px; height:75px; border-radius: 50%; display: flex; justify-content:center; align-items:center; color:hsl(0, 0%, 100%); font-size:25px; font-wight:bold; background-image: linear-gradient(to bottom, hsl(249, 99%, 64%), hsl(278, 94%, 30%));";
                thank.style.cssText = "font-size: 23px; letter-spacing: 3px; text-transform: uppercase; font-weight:bold; margin-top: 35px; margin-bottom: 15px;";
                details.style.cssText = "color: hsl(279, 6%, 55%);";
                conf.value = "Continue";
                e.preventDefault();
            }
        }
    }

    if (cardholderName === false) {
        paragragh1.appendChild(text);
        holder.after(paragragh1);
        paragragh1.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        holder.style.cssText = "border-color: hsl(0, 100%, 66%);";
        e.preventDefault();
    }

    if (cardNum === false) {
        if (isNaN(number.value) === true) {
            paragragh2.appendChild(text11);
            number.after(paragragh2);
        } else {
            paragragh2.appendChild(text.cloneNode(true));
            number.after(paragragh2);
            paragragh2.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-bottom: 0; margin-top: 6px;";
            number.style.cssText = "border-color: hsl(0, 100%, 66%);";
            e.preventDefault();
        }
    }

    if (expDateM === false) {

        if (isNaN(month.value) === true) {
            paragragh3.appendChild(text11.cloneNode(true));
            month.after(paragragh3);
        } else {
            paragragh3.appendChild(text.cloneNode(true));
            ex.after(paragragh3);
            ex.style.cssText = "display: flex; flexDirection: column;";
            paragragh3.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-bottom: 0; margin-top: 6px;";
            month.style.cssText = "border-color: hsl(0, 100%, 66%);";
            e.preventDefault();
        }
    }

    if (expDateY === false) {
        if (isNaN(year.value) === true) {
            paragragh4.appendChild(text11.cloneNode(true));
            year.after(paragragh4);
        } else {
            paragragh4.appendChild(text.cloneNode(true));
            ex.after(paragragh4);
            ex.style.cssText = "display: flex; flexDirection: column;";
            paragragh4.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-bottom: 0; margin-top: 6px;";
            year.style.cssText = "border-color: hsl(0, 100%, 66%);";
            e.preventDefault();
        }
    }

    if (expDateM === false && expDateY === false) {
        paragragh3.textContent = "";
        paragragh4.textContent = "";
        paragragh4.appendChild(text.cloneNode(true));
        ex.after(paragragh4);
        ex.style.cssText = "display: flex; flexDirection: column;";
        paragragh4.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-bottom: 0; margin-top: 6px;";
        e.preventDefault();
    }

    if (cvc === false) {
        if (isNaN(cvc3.value) === true) {
            paragragh5.appendChild(text11.cloneNode(true));
            cvc3.after(paragragh5);
        } else {
            paragragh5.appendChild(text.cloneNode(true));
            cvc3.after(paragragh5);
            paragragh5.style.cssText = "font-size:13px; color: hsl(0, 100%, 66%); width: 90px; height: 10px; margin-left: 15px; margin-bottom: 0; margin-top: 6px;";
            cvc3.style.cssText = "border-color: hsl(0, 100%, 66%);";
            e.preventDefault();
        }
    }
}
