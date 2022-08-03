"use strict";

const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.createElement("section");
section.classList.add("keys");
main.append(section);

const keys = document.querySelector(".keys");
const button = document.createElement("button");
const buttonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "C", "+", "-", "*", "/", "="];

const display = val => document.getElementById("id1").value += val;

const solve = () => {
    let x = document.getElementById("id1").value;
    let y = eval(x);
    if(y.toString().includes(".")) y = y.toFixed(2);
    document.getElementById("id1").value = y;
}

const clr = () => document.getElementById("id1").value = "";

buttonArr.forEach( e => {
    button.innerHTML = e;
    section.append(button.cloneNode(button));
    if(typeof e === "string") button.classList.add("operators");
});

const clickButtonListener = e => {
    const key = e.target.innerHTML;
    if(e.target.localName === "button"){
        if(key === "=") solve();
        else if(key === "C") clr();
        else display(key);
    }
}

const keyBoardListener = e => {
    if(e.target.localName === "body"){
        if(e.key === "=" || e.key === "Enter") solve();
        else if(e.key === "C" || e.key === "c") clr();
        else if(!Number.isNaN(+e.key) || buttonArr.includes(e.key)) display(e.key);
    }
}

keys.addEventListener("click", clickButtonListener);
body.addEventListener("keypress", keyBoardListener);