class PaymentGateway {
    processPayment(amount) {
        return `Processing a generic payment of $${amount}...`;
    }
}

class StripePayment extends PaymentGateway {
    processPayment(amount) {
        return `Charging $${amount} securely using STRIPE API.`;
    }
}

class PaypalPayment extends PaymentGateway {
    processPayment(amount) {
        return `Redirecting to PAYPAL to charge $${amount}.`;
    }
}

const defaultPay = new PaymentGateway();
const stripePay = new StripePayment();
const paypalPay = new PaypalPayment();

console.log(defaultPay.processPayment(100));

console.log(stripePay.processPayment(250));

console.log(paypalPay.processPayment(50));


// Polymorphism: Jab child class apne parent class ke kisi method ko dobara (override) define karti hai taake woh apne specific tareeqay se kaam kar sake, jabke method ka naam same rehta hai.

// Real-World Misaal: "Bolna" (Speak) ek action hai. Agar Parent class Animal hai aur usme speak() ka method hai, toh Child class Dog usay override karke "Woof" karega, aur Cat class usay override karke "Meow" karegi. Naam dono ka speak() hai, par nateeja alag.

// MERN/SaaS Misaal: Aapki app mein sendNotification() ka function hai. Agar user ne Email select kiya hai toh polymorphism ke zariye EmailService class ka method chalega (jo SendGrid use karega), aur agar Mobile notification hai toh PushService class ka method chalega (jo Firebase FCM use karega). Dono ka naam sendNotification() hi hoga, jis se frontend ka code bohot clean rehta hai.