const fs = require("fs");

const [command, amount] = process.argv.slice(2);

function getTotal() {
  var content = "";

  if (fs.existsSync("./bank.txt")) {
    content = fs.readFileSync("./bank.txt", "utf-8");
  } else {
    fs.appendFileSync("./bank.txt", " ", "utf-8");
    console.log("Your balance is 0.00 AZN");
    return;
  }

  const balance = content
    .split(", ")
    .slice(1)
    .reduce((a, b) => Number(a) + Number(b));
  return balance;
}
function total() {
  const balance = getTotal();
  console.log(`Your balance ${balance} USD`);
  return balance;
}

function deposit(amount) {
  if (isNaN(Number(amount))) {
    console.log("Entered value is NaN");
    return;
  }
  if (amount < 0) {
    console.log("Entered value is negative");
    return;
  }
  fs.appendFileSync("./bank.txt", `, ${amount}`, "utf-8");
  console.log("Deposit", amount);
  total();
}

function withdraw(amount) {
  if (isNaN(Number(amount))) {
    console.log("Entered value is NaN");
    return;
  }
  const currentbalance = getTotal();
  if (currentbalance < amount) {
    console.log("Insufficient balance");
    return;
  }
  if (amount < 0) {
    console.log("Entered value is negative");
    return;
  }
  fs.appendFileSync("./bank.txt", `, -${amount}`, "utf-8");
  console.log("Withdraw", amount);
  total();
}

switch (command) {
  case "total":
    total();
    break;
  case "deposit":
    deposit(amount);
    break;
  case "withdraw":
    withdraw(amount);
    break;
  default:
    console.log("Hech bir komanda yazmadiniz");
}
