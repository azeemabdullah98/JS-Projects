"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const inpVal = document.querySelector("#dob").value;
  const name = document.querySelector(".user-name").value;
  const [birthYear, birthMonth, birthDay] = inpVal.split("-");

  //   console.log(currentDate + " ->" + birthDate);
  const dob = new Date(inpVal);
  const diffInTime = currentDate.getTime() - dob.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
  console.log(name);
  console.log(diffInDays);

  const displayAge = function (message) {
    document.querySelector(".display-age").innerHTML = message;
  };

  //   console.log(Math.floor(diffInDays));
  if (isNaN(diffInDays) === true || name === "") {
    displayAge("please provide input");
  } else if (diffInDays == 0) {
    // console.log("You born today. Welcome!!!");
    displayAge("You born today. Welcome!!!");
  } else if (diffInDays < 0) {
    // console.log("birth date cannot be greater than the current date");
    displayAge("birth date cannot be greater than the current date");
  } else if (diffInDays >= 300 && diffInDays <= 365) {
    // console.log("you are a year old");
    displayAge("you are a year old");
  } else if (diffInDays > 365) {
    // console.log(`you are ${Math.floor(Number(diffInDays) / 365)} years old `);
    displayAge(`you are ${Math.floor(Number(diffInDays) / 365)} years old `);
  } else {
    // console.log(`you are just ${Math.floor(diffInDays)} days old`);
    displayAge(`you are just ${Math.floor(diffInDays)} days old`);
  }
});
