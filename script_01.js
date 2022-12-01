"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstnane);

/*****    02 Deklaration + Wertzuweisung I     ********** */

// let firstname;  // Deklaration (Definition)
// firstname = "Max"; // Wertzuweisung 
// console.log(firstname); // Ausgabe

// let familynName = "Mütze"; // Deklaration und Wertzuweisung
// console.log(familynName);  // Ausgabe
// console.log(firstname + " " + familynName); 

/*****    03 Deklaration + Wertzuweisung  II    ********** */

// let firstname, familynName;
// firstname = prompt ("Bitte Vornamen eingeben");
// familynName = prompt ("Bitte Nachnamen eingeben");
// console.log(firstname + " " + familynName)

/* JS ist eine untypisierte Sprache ! untyped */

// let test;
// // test = "Hi";
// // test= 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt:  " + test); // Ausgabe



/*****    03a Konstanten  ********** */
// const test = "Hi"; // Variable mit KONSTANTEM Inhalt
// // test = "Hallo"; // KEINE neue Zuweisung  zur LZ möglich! --> Fehler

// console.log("Inhalt:  " + test); // Ausgabe

/*****    04  Beispiel - Berechnung ********** */

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

let date = new Date();
let year = date.getFullYear(); 
console.log(date);

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);
