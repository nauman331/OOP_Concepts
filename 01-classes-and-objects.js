class ShiftService {

    constructor(shiftId, stateLocation, duration, baseRate) {
        this.shiftId = shiftId;
        this.stateLocation = stateLocation;
        this.duration = duration;
        this.baseRate = baseRate;
    }

    calculateTotalPay() {
        if (this.duration > 12) {
            return this.duration * (this.baseRate * 2);
        }
        return this.duration * this.baseRate;
    }

    getShiftSummary() {
        const total = this.calculateTotalPay();
        return `Shift ${this.shiftId} in ${this.stateLocation} total payout is $${total}.`;
    }
}

const shiftOne = new ShiftService('SH-101', 'Texas', 8, 20);
const shiftTwo = new ShiftService('SH-102', 'California', 14, 25);

console.log(shiftOne.getShiftSummary());

console.log(shiftTwo.getShiftSummary());

// Class (Naksha): Yeh ek blueprint hai. Jaise ek car ka naksha. Nakshe ko aap chala nahi sakte, yeh sirf batata hai ke car mein kya kya hoga.

// Object (Asal Cheez): Us nakshe ko dekh kar banayi gayi actual car. Ek nakshe (Class) se aap hazaron cars (Objects) bana sakte hain.

// Properties (Data): Car ka color, model, aur engine. Code ki zaban mein yeh Class ke andar likhe gaye Variables hote hain.

// Methods (Kaam): Car ko start karna, brake lagana. Code ki zaban mein yeh Class ke andar likhe gaye Functions hote hain.