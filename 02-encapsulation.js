class WorkerWallet {

    #balance;

    constructor(workerName, initialBalance) {
        this.workerName = workerName;
        this.#balance = initialBalance;
    }

    checkBalance() {
        return `Hello ${this.workerName}, your current balance is $${this.#balance}.`;
    }

    addEarnings(amount) {
        if (amount <= 0) {
            console.log("Error: Earnings must be greater than zero.");
            return;
        }
        this.#balance += amount;
        console.log(`$${amount} added successfully!`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Error: Insufficient balance!");
            return;
        }
        this.#balance -= amount;
        console.log(`$${amount} withdrawn. Remaining balance: $${this.#balance}`);
    }
}

const naumanWallet = new WorkerWallet('Nauman', 500);

console.log(naumanWallet.workerName);

console.log(naumanWallet.checkBalance());

naumanWallet.addEarnings(150);
naumanWallet.withdraw(1000);

// Encapsulation: Object ke data (variables) ko class ke andar chhupana aur usay bahar ki duniya se direct access na hone dena.

// Real-World Misaal (ATM Machine): ATM ke andar cash (data) rakha hota hai. Aap direct box tod kar cash nahi nikal sakte. Aapko ATM ka keypad aur screen (Methods/Functions) use karni parti hai. ATM khud check karta hai ke aapka PIN theek hai ya nahi, aur amount balance se zyada toh nahi.

// Private Fields (#): JavaScript mein kisi property ko hide karne ke liye uske naam ke shuru mein hashtag (#) lagate hain.

// Getters & Setters: Woh special functions (methods) jo private data ko safely read (get) ya modify (set) karne ke liye banaye jate hain, taake koi invalid data (jaise negative balance) save na kar de.

// console.log(naumanWallet.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class