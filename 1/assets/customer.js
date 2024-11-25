class customer{

    nazwaFirmy = "";
    nip = "";
    miasto = "";
    ulica = "";
    nrDomu = "";
    nrMieszkania = "";
    kodPocztowy = "";
    uwagi = "";
    branza = "";
    aktywny = true;         
    
    getData(){
        return `${this.nazwaFirmy} , NIP: ${this.nip}`;
    }

    getAddress(){
        return `ADRES: ${this.kodPocztowy}, ${this.miasto}, ${this.ulica}, ${this.nrDomu}`;
    }

}

class supplier extends customer(accountNumber){
    
    accountNumber = "";
    invoices = [];   

    constructor(accountNumber){
        super();
        this.accountNumber = accountNumber;
    }

}

