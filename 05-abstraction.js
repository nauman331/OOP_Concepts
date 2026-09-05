class EmailService {

    #connectToSMTP() {
        console.log("Connecting to Mail Server on port 465...");
    }

    #authenticateUser() {
        console.log("Verifying API Keys and Tokens...");
    }

    #dispatchNetworkRequest() {
        console.log("Converting email to binary and sending over TCP...");
    }

    sendWelcomeEmail(userEmail) {
        console.log(`Starting email process for ${userEmail}...`);
        this.#connectToSMTP();
        this.#authenticateUser();
        this.#dispatchNetworkRequest();

        return `Email successfully sent to ${userEmail}!\n`;
    }
}


const mailer = new EmailService();

console.log(mailer.sendWelcomeEmail("nauman@test.com"));

// Abstraction ka matlab hai system ke andar ki mushkil working (complexity) ko chhupa lena, aur bahar walon ko sirf ek asaan interface (buttons) dena.

// MERN stack mein jab aap axios.get('url') likhte hain, toh us ek line ke peechay hazaron lines ka network code chalta hai, lekin Axios ne woh sab aapse Abstract kar liya hai taake aapko sirf ek asaan function call karna paray.