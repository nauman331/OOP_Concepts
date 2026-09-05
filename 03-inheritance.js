class AppUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        return `${this.name} has logged into the app.`;
    }
}

class Admin extends AppUser {

    constructor(name, email, adminLevel) {
        super(name, email);
        this.adminLevel = adminLevel;
    }

    deleteAccount(userEmail) {
        return `Admin ${this.name} (Level: ${this.adminLevel}) deleted the account: ${userEmail}`;
    }
}


const normalWorker = new AppUser('Salaman', 'salaman@test.com');
console.log(normalWorker.login());

const systemAdmin = new Admin('Nauman', 'nauman@admin.com', 'SuperAdmin');

console.log(systemAdmin.login());

console.log(systemAdmin.deleteAccount('spammer@test.com'));



// Inheritance: Nayi classes banana jo purani classes ka code dobara use (reuse) kar sakein. Is se "DRY" (Don't Repeat Yourself) principle follow hota hai.

// Parent/Child Class: Jis class se data liya jata hai use Parent (Super) class kehte hain. Jo data leti hai use Child (Sub) class kehte hain.

// Real-World Misaal: Baap aur Beta. Beta apne baap ki gaari (methods) aur ghar (properties) use kar sakta hai, lekin bete ki apni specific cheezein (jaise apna laptop ya bike) bhi ho sakti hain jo baap use nahi karta.

// React Native Misaal: Jab hum React Class components use karte the, toh hum likhte the class MyScreen extends React.Component. Yahan MyScreen hamari Child class hoti thi jo React ki Component (Parent class) se render() aur setState() jaise methods inherit karti thi.

// Keywords (extends & super): extends class ko jorhne ke kaam aata hai. super() parent class ke constructor ko chalane ke kaam aata hai.
