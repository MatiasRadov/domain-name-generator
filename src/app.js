/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".cl", ".io"];

const domainNameGenerator = (arr1, arr2, arr3, arr4) => {
  let domainGeneratedName = "";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; j < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          domainGeneratedName += arr1[i].concat(arr2[j], arr3[k], arr4[l], " ");
        }
      }
    }
  }
  return domainGeneratedName;
};
console.log(domainNameGenerator(pronoun, adj, noun, ext));
