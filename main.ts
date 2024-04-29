#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n \t Welcome To Muhammad Talha Currency-Converter \n"));

// Define the list of currencies and their exchange raates
let exchange_rate :any = {
    "USD": 1,// Baase currency
    "EUR":0.9,// European currency
    "JYP":113,//japenese currency Yen
    "CAD":1.3,// Canadian Doller
    "AUD":1.65,// Australian Doller
    "PKR":280,// Pakistani Ruppes
    "SUR":3.5,// Saudian Riyal
    "UAED": 3.5,// united Arab Emirates
    "KWD":0.3,//Kuwaitian Riyal 
}
// prompt the user to select the currencies to  cnvert from and to
let user_answer = await inquirer.prompt ([
    {
        name :"from_currency",
        type : "list",
        message : "Select the currency to convert from :",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR","SUR","UAED","KWD"],
    },
    {
        name : "to_currency",
        type : "list",
        message : "Select the currency to convert in To :",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR","SUR","UAED","KWD"],
    },
    {
        name : "amount",
        type : "input",
        message : "Enter the amount to convert :",
    }
]);
// perfom currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount =  exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

// Formula of conversion 
let base_amount = amount / from_amount ;
let converted_amount = base_amount * to_amount;
// Display amount
console.log(` The Converted Amount = ${chalk.yellow(converted_amount.toFixed(3))}`);