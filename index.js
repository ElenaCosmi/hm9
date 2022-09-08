"use strict";

const books = [
  {
    name: "The Murder on the Links",
    autor: "Agatha Christie",
    genre: "thriller",
    year: 1923,
  },
  {
    name: "The Man in the Brown Suit",
    autor: "Agatha Christie",
    genre: "thriller",
    year: 1924,
  },
  {
    name: "The Big Four",
    autor: "Agatha Christie",
    genre: "thriller",
    year: 1927,
  },
  {
    name: "Murder on the Orient Express",
    autor: "Agatha Christie",
    genre: "thriller",
    year: 1934,
  },
  {
    name: "We will always have summer",
    autor: "Jenny Han",
    genre: "romance",
    year: 2011,
  },
  {
    name: "Always ad forever, Lara Jean",
    autor: "Jenny Han",
    genre: "romance",
    year: 2017,
  },
  {
    name: "Burcn for Burn",
    autor: "Jenny Han",
    genre: "romance",
    year: 2012,
  },
  {
    name: "Kindred",
    autor: "Octavia Butler",
    genre: "science fiction",
    year: 1979,
  },
  {
    name: "Dawn",
    autor: "Octavia Butler",
    genre: "science fiction",
    year: 1987,
  },
  {
    name: "Fledgling",
    autor: "Octavia Butler",
    genre: "science fiction",
    year: 2005,
  },
];

const mostGenre = [
  console.log(
    books
      .filter((mostCount) => {
        return mostCount.genre === "thriller";
      })
      .map((bookId) => {
        return bookId.name.toUpperCase();
      })
  ),
];

const twentiethCentury = [
  console.log(
    books
      .filter((centCount) => {
        return centCount.year >= 1900 && centCount.year < 2000;
      })
      .map((bookId) => {
        return bookId.name;
      })
  ),
];

const twentyFirstCentury = [
  console.log(
    books
      .filter((centCount) => {
        return centCount.year >= 2000;
      })
      .map((bookId) => {
        return bookId.name;
      })
  ),
];