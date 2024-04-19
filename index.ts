#! /usr/bin/env node
import inquirer from "inquirer";

let myPin = 242007;
let myBalance = 25000;

const pinAnswer = await inquirer.prompt([
  {
    message: "Please enter your PIN code:",
    name: "pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Wellcome in your account Dani");
  let operator = await inquirer.prompt([
    {
      message: "Select what you are want to done:",
      name: "options",
      type: "list",
      choices: ["Check Balance", "Fast Cash", "Cash Withdraw"],
    },
  ]);
  if (operator.options === "Check Balance") {
    console.log(`Dani your account balance is: ${myBalance}`);
  } else if (operator.options === "Fast Cash") {
    let fastCash = await inquirer.prompt([
      {
        message: "Select the amount:",
        name: "amount",
        type: "list",
        choices: [500, 2000, 5000, 10000, 20000, 50000],
      },
    ]);
    if (myBalance >= fastCash.amount) {
      myBalance -= fastCash.amount;

      console.log(`Your remaining balance is : ${myBalance}`);
    } else {
      console.log(
        `Your balance is not according to the requirment : ${myBalance}`
      );
    }
  } else if (operator.options === "Cash Withdraw") {
    let cashWithdraw = await inquirer.prompt([
      {
        message: "Enter the amount: ",
        name: "enter",
        type: "number",
      },
    ]);
    if (myBalance >= cashWithdraw.enter) {
      myBalance -= cashWithdraw.enter;

      console.log(`Your remaining balance is : ${myBalance}`);
    } else {
      console.log(
        `Your balance is not according to the requirment : ${myBalance}`
      );
    }
  }
} else {
  console.log("Wrong PIN code !");
}