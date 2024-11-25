"use strict";
class customer {
    constructor() {
        this.nazwaFirmy = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = "";
        this.nrDomu = "";
        this.nrMieszkania = "";
        this.kodPocztowy = "";
        this.uwagi = "";
        this.branza = "";
        this.aktywny = true;
    }
    getData() {
        return `${this.nazwaFirmy} , NIP: ${this.nip}`;
    }
    getAddress() {
        return `ADRES: ${this.kodPocztowy}, ${this.miasto}, ${this.ulica}, ${this.nrDomu}`;
    }
}
class supplier extends customer(accountNumber) {
    constructor(accountNumber) {
        super();
        this.accountNumber = "";
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
