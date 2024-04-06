// STEP 1 CURRENCY CONVERSION RATES
import inquirer from "inquirer";

const conversion: { [key: string]: { [key: string]: number } } = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    }
};

// STEP 2 USING INQUIRER
const askConversion = async () => {
    const answer: {
        from: "PKR" | "USD" | "GBP",
        to: "PKR" | "USD" | "GBP",
        amount: number
    } = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your conversion currency (From):"
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your conversion currency (To):"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount you want to convert:"
        }
    ]);

    return answer;
};

// STEP 3 OUTPUT
const convertCurrency = ({ from, to, amount }: { from: string, to: string, amount: number }) => {
    if (from && to && amount && from !== to) {
        let result = conversion[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result.toFixed(2)}`);
    } else {
        console.log("Invalid input");
    }
};

// Run the conversion
const startConversion = async () => {
    const answer = await askConversion();
    convertCurrency(answer);
};

// Start the conversion process
startConversion();
